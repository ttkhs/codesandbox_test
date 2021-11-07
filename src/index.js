import "./styles.css";

//追加ボタン処理
const onClickAdd = () => {
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  const div = document.createElement("div");
  div.className = "listRow";

  const li = document.createElement("li");
  li.innerText = inputText;

  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromImcompleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    //　戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      deleteFromImcompleteList(backButton.parentNode);

      const text = backButton.firstElementChild.innerText;

      const addTarget = backButton.parentNode;

      addTarget.textContent = null;

      const li = document.createElement("li");
      li.innerText = text;
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("imcompleteList").appendChild(addTarget);
  });

  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incompeteList").appendChild(div);
  console.log(div);
};

//未完了リストに追加
const createIncompleteList = (text) => {
  //追加ボタン処理
  const onClickAdd = () => {
    document.getElementById("addText").value = "";

    const div = document.createElement("div");
    div.className = "listRow";

    const li = document.createElement("li");
    li.innerText = text;

    //完了ボタン
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
      deleteFromImcompleteList(completeButton.parentNode);

      const addTarget = completeButton.parentNode;
      const text = addTarget.firstElementChild.innerText;

      addTarget.textContent = null;

      const li = document.createElement("li");
      li.innerText = text;

      //　戻すボタン
      const backButton = document.createElement("button");
      backButton.innerText = "戻す";
      backButton.addEventListener("click", () => {
        deleteFromImcompleteList(backButton.parentNode);

        const text = backButton.firstElementChild.innerText;

        const addTarget = backButton.parentNode;

        addTarget.textContent = null;

        const li = document.createElement("li");
        li.innerText = text;
      });

      addTarget.appendChild(li);
      addTarget.appendChild(backButton);

      document.getElementById("imcompleteList").appendChild(addTarget);
    });

    //削除ボタン
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
      deleteFromImcompleteList(deleteButton.parentNode);
    });

    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    document.getElementById("incompeteList").appendChild(div);
    console.log(div);
  };
};

//リストから削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("incompeteList").removeChild(target);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
