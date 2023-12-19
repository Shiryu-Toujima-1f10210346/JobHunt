import styles from './index.module.css';

function Index() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <title>Document</title>
        <script src="https://cdn.tailwindcss.com" />
        <style />
      </head>
      <body className={styles.bodyClass}>
        <table className="form-table">
          {/* 以下の各行は必要に応じて繰り返す */}
          <tr>
            <th>氏名</th>
            <td>
              <input type="text" className={styles['input-field']} placeholder="年　月　日現在" />
            </td>
            <td className="note" rowSpan="6">
              <div className="photo-note">
                写真を貼る欄
                <br />
                写真を貼る必要がある場合
                <br />
                1. 縦36〜40mm
                <br />
                2. 横24〜30mm
                <br />
                3. 背景は青・白
                <br />
                4. 帽子を着用しない
                <br />
              </div>
            </td>
          </tr>
          {/* 他の行も同様に繰り返す */}
        </table>
      </body>
    </>
  );
}

export default Index;
