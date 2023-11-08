// DOMが読み込まれたら実行される関数
document.addEventListener('DOMContentLoaded', function() {
    onload();
});

function onload() {
    // 現在日時を取得
    const date = new Date();
    // 曜日ごとのメッセージ
    const daysOfWeek = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
    const dailyMessages = [
        "月曜日です。今週は外食の予定は多いですか？栄養バランスに気をつけましょう。",
        "火曜日です。お気に入りのお店に足を運んでもいいかも。",
        "水曜日です。週の中盤です。好きなものを食べて後半戦も乗り切りましょう！",
        "木曜日です。週末まであと一息！忙しくても食事は抜かないでくださいね。",
        "金曜日です。１週間お疲れ様です！夜はパーっと飲みませんか？",
        "土曜日です。外食は混んでるかも？ゆっくり自炊もいいですね。",
        "日曜日です。外食は混んでるかも？"
    ];

    // 時間帯ごとのメッセージ
    const currentHour = date.getHours();
    const hourlyMessages = [
        "朝ごはん",
        "ランチ",
        "おやつタイム",
        "ディナー"
    ];
    let hourlyMessage = "";
    if (currentHour >= 4 && currentHour < 10) {
        hourlyMessage = hourlyMessages[0]; // 朝ごはん
    } else if (currentHour >= 10 && currentHour < 14) {
        hourlyMessage = hourlyMessages[1]; // ランチ
    } else if (currentHour >= 14 && currentHour < 17) {
        hourlyMessage = hourlyMessages[2]; // おやつタイム
    } else {
        hourlyMessage = hourlyMessages[3]; // ディナー
    }

    // メッセージ要素の取得とテキストの設定
    const messageElement = document.getElementById("dailyMessage");
    messageElement.textContent = `今日は${dailyMessages[date.getDay()]} 充実した${hourlyMessage}をお過ごしください。`;
}
