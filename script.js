"use strict";
const $ = id => document.getElementById(id);
const STORAGE_KEY = "social-caption-studio-v1";
const templates = {
 sad:["Có những ngày, {topic}… chỉ muốn im lặng một chút. 🥀","Đôi khi {topic} cũng đủ khiến lòng chùng xuống. 🌧️","Không phải chuyện gì về {topic} cũng có thể nói thành lời."],
 cute:["Một chút {topic}, một chút niềm vui. 💗","Hôm nay có {topic} nên mọi thứ đáng yêu hơn! ✨","Gửi bạn một chút năng lượng từ {topic}. 🌷"],
 motivational:["Từng bước một với {topic}, rồi mình sẽ tiến xa. 🔥","Đừng đợi hoàn hảo mới bắt đầu: {topic}! 💪","Kiên trì với {topic} — kết quả sẽ đến. 🌟"],
 cool:["Không cần ồn ào, {topic} tự nói lên tất cả. 😎","Chất riêng của mình: {topic}. ⚡","Ít lời, nhiều hành động. {topic}. 🖤"]
};
const tags = {TikTok:["#tiktok","#xuhuong","#fyp"],Facebook:["#facebook","#chiase","#camxuc"],Instagram:["#instagram","#instadaily","#vibes"]};
let index=0;
function readSaved(){try{const data=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");return Array.isArray(data)?data.filter(x=>typeof x==="string").slice(0,100):[]}catch{return []}}
function writeSaved(items){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(items));return true}catch{message("Không thể lưu trên trình duyệt này.");return false}}
function message(text){$("status").textContent=text}
function render(){const list=$("saved");list.replaceChildren();const items=readSaved();if(!items.length){const li=document.createElement("li");li.textContent="Chưa có ý tưởng nào.";list.append(li);return}
items.forEach((item,i)=>{const li=document.createElement("li");const text=document.createElement("div");text.textContent=item;const btn=document.createElement("button");btn.className="secondary";btn.textContent="Xóa";btn.addEventListener("click",()=>{const next=readSaved();next.splice(i,1);if(writeSaved(next))render()});li.append(text,btn);list.append(li)})}
$("generate").addEventListener("click",()=>{const topic=$("topic").value.trim()||"những điều nhỏ bé";const mood=$("mood").value;const platform=$("platform").value;const options=templates[mood];const caption=options[index++%options.length].replace("{topic}",topic);$("result").value=caption+"\n\n"+tags[platform].join(" ");message("Đã tạo caption. Bạn có thể chỉnh sửa trước khi lưu.")});
$("copy").addEventListener("click",async()=>{const value=$("result").value.trim();if(!value){message("Hãy tạo caption trước.");return}try{await navigator.clipboard.writeText(value);message("Đã sao chép!") }catch{ $("result").focus();$("result").select();message("Hãy chọn Sao chép từ menu của thiết bị.") }});
$("save").addEventListener("click",()=>{const value=$("result").value.trim();if(!value){message("Chưa có nội dung để lưu.");return}const items=readSaved();if(items.includes(value)){message("Ý tưởng này đã được lưu.");return}items.unshift(value);if(writeSaved(items.slice(0,100))){render();message("Đã lưu ý tưởng!") }});
$("clear").addEventListener("click",()=>{if(!readSaved().length)return;if(confirm("Xóa toàn bộ ý tưởng đã lưu?")&&writeSaved([])){render();message("Đã xóa tất cả.")}});
render();