// --- 簡易フォームバリデーションと送信デモ ---
// このスクリプトは、フォーム送信をシミュレートする「デモ」です。
// 実際に運用する際は、Netlify Forms, Formspree, Getform などのフォームバックエンドサービスを利用するか、
// サーバーサイドのプログラム（PHP, Node.jsなど）でメールを送信する処理に書き換える必要があります。

document.getElementById('seminarForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 実際の送信を一旦停止

    const form = e.target;
    const company = form.company.value.trim();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const messageDiv = document.getElementById('formMessage');

    // 簡単なバリデーション
    if (company === '' || name === '' || email === '') {
        messageDiv.textContent = '「必須」項目をすべてご入力ください。';
        messageDiv.className = 'error';
        return;
    }

    // --- ↓↓ ここから下を、実際のフォーム送信処理に置き換えてください ↓↓ ---

    // デモ：送信中（ボタンを無効化）
    messageDiv.textContent = '送信中です...';
    messageDiv.className = 'info'; // (infoクラスはCSSに未定義ですが、例として)
    form.querySelector('button').disabled = true;
    form.querySelector('button').textContent = '送信中...';

    // デモ：2秒後に「成功」をシミュレート
    setTimeout(() => {
        // フォームを非表示にし、成功メッセージを表示
        form.style.display = 'none';
        messageDiv.innerHTML = `<strong>お申込みありがとうございます！</strong><br><br>${name} 様（${company}）宛に、ご入力いただいたメールアドレス（${email}）へセミナー参加用URLをお送りしました。<br>（これはデモ表示です）`;
        messageDiv.className = 'success';
    }, 2000);

    // デモ：送信失敗のシミュレート（デモでは使いませんが、例として）
    /*
    setTimeout(() => {
        messageDiv.textContent = '送信に失敗しました。お手数ですが、もう一度お試しいただくか、メールにてご連絡ください。';
        messageDiv.className = 'error';
        form.querySelector('button').disabled = false;
        form.querySelector('button').textContent = '特典付きセミナーに今すぐ申し込む';
    }, 2000);
    */

    // --- ↑↑ ここまでがデモ処理です ↑↑ ---
});