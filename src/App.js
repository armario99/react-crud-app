import './App.css';
import { useState } from "react";
import Form from './components/Form'
import Alert from "./components/Alert";
import List from "./components/List";
function App() {
  const [id, setId] = useState('');
  const [edit, setEdit] = useState(false);

  const [prop, setProp] = useState("");
  const [price, setPrice] = useState();

  const [expenses, setExpenses] = useState([])

  const [alert, setAlert] = useState({ show: false });

  const handleProp = (e) => {
    setProp(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); {/*이벤트의 기본 동작을 취소하는 JavaScript 메서드*/}
    if (prop !== "" && price > 0) {
      if (edit) {
        const newExpenses = expenses.map(item => {
          return item.id === id ? { ...item, prop, price } : item
        })

        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({ type: 'success', text: "아이템이 수정되었습니다." });
      } else {
        const newExpense = { id: crypto.randomUUID(), prop, price }
        // 불변성을 지켜주기 위해서 새로운 expenses를 생성
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        handleAlert({ type: "success", text: "아이템이 생성되었습니다." });
      }
      setProp("");
      setPrice('');
    } else {
      console.log('error');
      handleAlert({
        type: 'danger',
        text: 'charge는 빈 값일 수 없으며 amount는 0보다 커야 합니다.'
      })
    }
  };

  const handleEdit = id => {
    const expense = expenses.find(item => item.id === id);
    const { prop, price } = expense;
    setId(id);
    setProp(prop);
    setPrice(price);
    setEdit(true);
  }
  const clearItems = () => {
    setExpenses([]);
  }
  
  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id)
    console.log(newExpenses);
    setExpenses(newExpenses);
    handleAlert({ type: 'danger', text: '아이템이 삭제되었습니다.' })
  }
  return (
    <main>
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
      <h1 className="App-title">예산 계산기</h1>
      <div className='main-container'>
        {/*항목 입력*/}
        <div className="App_Form">
          <Form
            prop={prop}
            handleprop={handleProp}
            price={price}
            handleprice={handlePrice}
            handleSubmit={handleSubmit}
            edit={edit}
          />
        </div>
        <div className="App_List">
          <List
            expenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            clearItems={clearItems}
          />
        </div>
        <div className="App_Total">
          <p>
            총지출:
            <span>
              {expenses.reduce((acc, curr) => {
                return (acc += parseInt(curr.price));
              }, 0)}
              원
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
