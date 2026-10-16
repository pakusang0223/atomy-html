"""가짜 데이터로 화면 스크린샷을 만들어요. 서버에 접속하지 않고, 이름·기록은 모두 예시예요.

사용법:  python3 tools/preview.py
필요:    pip install playwright && playwright install chromium
결과:    tools/out/ko.png, th.png, admin.png, ko_signup.png
"""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
APP = (ROOT / "public" / "index.html").as_uri()
OUT_DIR = ROOT / "tools" / "out"
OUT_DIR.mkdir(exist_ok=True)
OUT = str(OUT_DIR) + "/"
ME='11111111-1111-1111-1111-111111111111'
ME_TH='22222222-2222-2222-2222-222222222222'
_cs=lambda t,g:{"title":t,"tagline":g,"start_date":"2026-10-12","end_date":"2026-10-25","goal_pv":10000,"required_days":12}
settings={"KR":_cs("1일 1등록 챌린지","매일 1등록 · 1만PV 이상! 인증하고 함께 완주해요"),"TH":_cs("ชาเลนจ์ 1 วัน 1 ลงทะเบียน","ลงทะเบียน 1 ราย/วัน และ 10,000 PV ขึ้นไป ส่งรูปยืนยันแล้วไปให้ถึงเส้นชัยด้วยกัน!")}
kr=[("김지은",4,True,True),("박서연",4,True,False),("이도윤",3,False,False),("최하늘",3,True,True),("정민준",2,False,False),("한소라",1,True,False)]
th=[("สมชาย ใจดี",4,True,True),("นภา สุขใจ",3,True,False),("ปิยะ ทองดี",2,False,False),("มาลี รักไทย",4,True,True)]
parts=[{"id":ME,"name":"오민아","country":"KR","days":4,"today_reg":True,"today_pv":False}]
for i,(n,d,r,p) in enumerate(kr): parts.append({"id":f"k{i}","name":n,"country":"KR","days":d,"today_reg":r,"today_pv":p})
parts.append({"id":ME_TH,"name":"สุดา แสงทอง","country":"TH","days":4,"today_reg":True,"today_pv":True})
for i,(n,d,r,p) in enumerate(th): parts.append({"id":f"t{i}","name":n,"country":"TH","days":d,"today_reg":r,"today_pv":p})
state={"settings":settings,"today":{"KR":"2026-10-16","TH":"2026-10-16"},"participants":parts}

def certs(pid,both_today):
    out=[]
    for d in ["10-12","10-13","10-14","10-15"]:
        for k in ("reg","pv"):
            out.append({"id":f"{k}{d}","kind":k,"challenge_date":"2026-"+d,"image_path":f"{pid}/{k}-{d}.jpg","note":None,"uploaded_at":"2026-"+d+"T10:00:00Z"})
    out.append({"id":"t1","kind":"reg","challenge_date":"2026-10-16","image_path":f"{pid}/reg-today1.jpg","note":"김OO 님 등록","uploaded_at":"2026-10-16T01:00:00Z"})
    out.append({"id":"t2","kind":"reg","challenge_date":"2026-10-16","image_path":f"{pid}/reg-today2.jpg","note":None,"uploaded_at":"2026-10-16T02:00:00Z"})
    if both_today:
        out.append({"id":"t3","kind":"pv","challenge_date":"2026-10-16","image_path":f"{pid}/pv-today1.jpg","note":"12,400 PV","uploaded_at":"2026-10-16T03:00:00Z"})
    return out
admin={"settings":settings,"today":{"KR":"2026-10-16","TH":"2026-10-16"},"participants":[{"id":p["id"],"name":p["name"],"country":p["country"],"created_at":"2026-10-12T01:00:00Z","days":p["days"],"reg_days":p["days"]+1,"pv_days":p["days"],"photos":p["days"]*3+2,"today_reg":p["today_reg"],"today_pv":p["today_pv"],"is_candidate":False,"is_winner":False} for p in parts]}

def mk(pid,r,v):
    out=[]
    for i in range(r): out.append({"id":f"r{pid}{i}","kind":"reg","image_path":f"{pid}/reg-{i}.jpg","note":"김OO 님" if i==0 else None,"uploaded_at":"2026-10-16T01:00:00Z"})
    for i in range(v): out.append({"id":f"v{pid}{i}","kind":"pv","image_path":f"{pid}/pv-{i}.jpg","note":"12,400 PV" if i==0 else None,"uploaded_at":"2026-10-16T02:00:00Z"})
    return out
plan=[(2,1),(1,0),(0,0),(1,2),(0,0),(1,0),(3,1),(1,1),(0,0),(2,2),(1,0),(1,1)]
day=[{"id":p["id"],"name":p["name"],"country":p["country"],"certs":mk(p["id"],*plan[i%len(plan)])} for i,p in enumerate(parts)]

def svg(path):
    pv='/pv' in path or 'pv-' in path
    c1,c2=('#7c3aed','#c4b5fd') if pv else ('#2563eb','#bfdbfe')
    label='PV' if pv else 'REG'
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="{c2}"/><rect x="30" y="40" width="140" height="120" rx="10" fill="#fff"/><rect x="42" y="56" width="70" height="10" rx="5" fill="{c1}"/><rect x="42" y="78" width="116" height="8" rx="4" fill="#cbd5e1"/><rect x="42" y="96" width="100" height="8" rx="4" fill="#cbd5e1"/><text x="100" y="146" font-size="22" text-anchor="middle" fill="{c1}" font-family="sans-serif" font-weight="700">{label}</text></svg>'

def run(name, url, me=None, lang='ko', admin_mode=False, tall=True):
    with sync_playwright() as p:
        b=p.chromium.launch()
        ctx=b.new_context(viewport={'width':390,'height':844},device_scale_factor=2,locale='ko-KR')
        pg=ctx.new_page()
        def rpc(route):
            fn=route.request.url.split('/rpc/')[1]
            body=json.loads(route.request.post_data or '{}')
            if fn=='get_public_state': data=state
            elif fn=='get_me': data=next((x for x in parts if x['id']==body['p_id']),None)
            elif fn=='get_my_certs': data=certs(body['p_id'], body['p_id']==ME_TH)
            elif fn=='admin_overview': data=admin
            elif fn=='admin_day_view': data=day
            elif fn=='admin_get_certs': data=certs(body['p_id'],True)
            else: data=True
            route.fulfill(status=200,content_type='application/json',headers={'access-control-allow-origin':'*'},body=json.dumps(data))
        pg.route('**/rest/v1/rpc/*',rpc)
        pg.route('**/storage/v1/object/public/certs/**',lambda r:r.fulfill(status=200,content_type='image/svg+xml',body=svg(r.request.url)))
        init=f"try{{localStorage.setItem('d1_lang','{lang}');"+(f"localStorage.setItem('d1_me','{me}');" if me else "")+("sessionStorage.setItem('d1_admin','x');" if admin_mode else "")+"}catch(e){}"
        pg.add_init_script(init)
        pg.goto(APP+url)
        pg.wait_for_timeout(1800)
        pg.screenshot(path=OUT+name,full_page=tall)
        b.close()

run('ko.png','',me=ME,lang='ko')
run('th.png','',me=ME_TH,lang='th')
run('admin.png','?admin=1',admin_mode=True)
run('ko_signup.png','',lang='ko')  # 이름 입력 화면(로그인 전)
print('done')
