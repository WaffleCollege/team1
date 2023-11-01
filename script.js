'use strict'
// Please don't delete the 'use strict' line above

/**
 * ボタンがクリックされたら、食べ物の画像を表示する関数
 */
let title = "これから決めます！";
function showFood() {
    //結果反映用のエレメントを取得
    let result = document.getElementById("result");
    let name = document.getElementById("foodName");
    let link = document.getElementById("foodLink");
    let img = document.getElementById("foodImg");

    //選択肢取得用のエレメントを取得
    let action = document.getElementsByName("action");
    let foodType = document.getElementsByName("foodType");

    //選択した項目を取得
    let checkedAction;
    let checkedFoodType;

    for (let i = 0; i < action.length; i++) {
        if (action[i].checked) {
            checkedAction = action[i].id;
        }
    }

    for (let i = 0; i < foodType.length; i++) {
        if (foodType[i].checked) {
            checkedFoodType = foodType[i].id;
        }
    }

    //選択肢に合わせて表示するテキストと画像を設定
    if (checkedAction == "eatingOut") {
        //外食
        if (checkedFoodType == "japaneseFood") {
            //外食・和食
            name.innerHTML = "お寿司";
            link.setAttribute("href", "sushi.jpg");
            link.setAttribute("data-title","お寿司");
            img.setAttribute("src", "sushi.jpg");
            title = "お寿司";
        } else if (checkedFoodType == "chineseFood") {
            //外食・中華
            name.innerHTML = "小籠包";
            link.setAttribute("href", "xiaolongbao.jpg");
            link.setAttribute("data-title","小籠包");
            img.setAttribute("src", "xiaolongbao.jpg");
            title ="小籠包";
        } else if (checkedFoodType == "westernFood") {
            //外食・洋食
            name.innerHTML = "ピザ";
            link.setAttribute("href", "pizza.jpg");
            link.setAttribute("data-title","ピザ");
            img.setAttribute("src", "pizza.jpg");
            title ="ピザ";
        } else if (checkedFoodType == "ethnicFood") {
            //外食・エスニック
            name.innerHTML = "カレー";
            link.setAttribute("href", "curry.jpg");
            link.setAttribute("data-title","カレー");
            img.setAttribute("src", "curry.jpg");
            title ="カレー";
        }
    } else if (checkedAction == "takeOut") {
        //テイクアウト
        if (checkedFoodType == "japaneseFood") {
            //テイクアウト・和食
            name.innerHTML = "牛めし";
            link.setAttribute("href", "gyu-don.jpg");
            link.setAttribute("data-title","牛めし");
            img.setAttribute("src", "gyu-don.jpg");
            title ="牛めし";
        } else if (checkedFoodType == "chineseFood") {
            //テイクアウト・中華
            name.innerHTML = "餃子";
            link.setAttribute("href", "jiaozi.jpg");
            link.setAttribute("data-title","餃子");
            img.setAttribute("src", "jiaozi.jpg");
            title ="餃子";
        } else if (checkedFoodType == "westernFood") {
            //テイクアウト・洋食
            name.innerHTML = "ハンバーガー";
            link.setAttribute("href", "hamburger.jpg");
            link.setAttribute("data-title","ハンバーガー");
            img.setAttribute("src", "hamburger.jpg");
            title ="ハンバーガー";
        } else if (checkedFoodType == "ethnicFood") {
            //テイクアウト・エスニック
            name.innerHTML = "トムヤムクン";
            link.setAttribute("href", "tomyamkun.jpg");
            link.setAttribute("data-title","トムヤムクン");
            img.setAttribute("src", "tomyamkun.jpg");
            title ="トムヤムクン";
        }
    } else if (checkedAction == "cooking") {
        //自炊
        if (checkedFoodType == "japaneseFood") {
            //自炊・和食
            name.innerHTML = "さばの味噌煮";
            link.setAttribute("href", "sabanomisoni.jpg");
            link.setAttribute("data-title","さばの味噌煮");
            img.setAttribute("src", "sabanomisoni.jpg");
            title ="さばの味噌煮";
        } else if (checkedFoodType == "chineseFood") {
            //自炊・中華
            name.innerHTML = "棒棒鶏";
            link.setAttribute("href", "bangbangji.jpg");
            link.setAttribute("data-title","棒棒鶏");
            img.setAttribute("src", "bangbangji.jpg");
            title ="棒棒鶏";
        } else if (checkedFoodType == "westernFood") {
            //自炊・洋食
            name.innerHTML = "ビーフシチュー";
            link.setAttribute("href", "beafStew.jpg");
            link.setAttribute("data-title","ビーフシチュー");
            img.setAttribute("src", "beafStew.jpg");
            title ="ビーフシチュー";
        } else if (checkedFoodType == "ethnicFood") {
            //自炊・エスニック
            name.innerHTML = "生春巻き";
            link.setAttribute("href", "springRoll.jpg");
            link.setAttribute("data-title","生春巻き");
            img.setAttribute("src", "springRoll.jpg");
            title ="生春巻き";
        }
    }

    //結果を表示する
    result.style.display = "block";
    return title;
}


/**
 * 曜日・時間帯ごとにメッセージを表示する
 */
// function onload() {
//     // 曜日ごとのメッセージ
//     const date = new Date();
//     const daysOfWeek = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
//     const dayOfWeek = daysOfWeek[date.getDay()];
//     const messageElement = document.getElementById("dailyMessage");
//     const dailyMessages = [
//         "月曜日です。今週は外食の予定は多いですか？栄養バランスに気をつけましょう。",
//         "火曜日です。お気に入りのお店に足を運んでもいいかも。",
//         "水曜日です。週の中盤です。好きなものを食べて後半戦も乗り切りましょう！",
//         "木曜日です。週末まであと一息！忙しくても食事は抜かないでくださいね。",
//         "金曜日です。１週間お疲れ様です！夜はパーっと飲みませんか？",
//         "土曜日です。外食は混んでるかも？ゆっくり自炊もいいですね。",
//         "日曜日です。外食は混んでるかも？"
//     ];

//     // 時間帯ごとのメッセージ
//     const currentHour = date.getHours();
//     const hourlyMessages = [
//         "朝ごはん",
//         "ランチ",
//         "おやつタイム",
//         "ディナー"
//     ];
//     let hourlyMessage = "";
//     if (currentHour >= 4 && currentHour < 10) {
//         hourlyMessage = hourlyMessages[0];
//     } else if (currentHour >= 10 && currentHour < 14) {
//         hourlyMessage = hourlyMessages[1];
//     } else if (currentHour >= 14 && currentHour < 17) {
//         hourlyMessage = hourlyMessages[2];
//     } else {
//         hourlyMessage = hourlyMessages[3];
//     }
//     // メッセージをhtmlで表示
//     messageElement.textContent = `今日は${dailyMessages[date.getDay()] || "曜日情報が取得できませんでした。"} 充実した${hourlyMessage}をお過ごしください`;
// }

// twitter
function share_twitter(){
    const share_twitter = document.getElementById("js-share-twitter");
    const shareTitle = title;
    share_twitter.setAttribute(
        "href",
        "http://twitter.com/share?url=kyounogohan.com&text=今日のごはんは・・・"+shareTitle+"!!!!!&via=&hashtags=今日のごはん"
    );
    }
    
    // facebook
    function share_facebook(){
    const share_facebook = document.getElementById("js-share-facebook");
    share_facebook.setAttribute(
        "href",
        "http://www.facebook.com/share.php?u=kyounogohan.com&text=食べるご飯を決めた！&via=&hashtags=今日のごはん"
    );
    }
    
    // line
    function share_line(){
    const share_line = document.getElementById("js-share-line");
    share_line.setAttribute(
        "href",
        "https://social-plugins.line.me/lineit/share?url=yurukei-career.com&text=食べるご飯を決めた！&via=&hashtags=今日のごはん"
    );
    }