import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了リストから削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加
const createIncompleteList = (text) => {
  // divタグの作成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグの作成
  const li = document.createElement("li");
  li.innerText = text;
  // 完了ボタンの作成
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    // 親タグ(div)の削除
    deleteFromIncompleteList(completebutton.parentNode);
    //完了リストに追加
    const addTarget = completebutton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;
    // 追加テキストを取得
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタンを作成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      // 完了リストから削除
      const deleteTarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // 未完了リストへ移動
      const text = backbutton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタンの作成
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    // 親タグ(div)の削除
    deleteFromIncompleteList(deletebutton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
