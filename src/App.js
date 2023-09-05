import Course from './Course'; // bunu yapmak app.js i course.js nin parenti yapar
import './App.css';
import { useState } from 'react';

function getRandomCourse() {
  const courseArray = ['Angular', 'Bootstrap', 'Ccsharp', 'KompleWeb'];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
  //burda rastgele olarak bir image stringi yolluyor. öncelikle bir dizi tanımlıyor içinde resimlerin 
  //isimlerini tutuyor sonrasında random olarak dan bu dizinin uzunluğuna kadar bir sayı oluşturuyor.
  //floor ile virgüllü sayıyı bi aşağısına yuvarlıyor. random olarak oluşan sayıdaki dizi elemanını döndürüyor
}

function App() {
  const [courses, setCourses] = useState([]);
  //courses başlangıçta boş bir dizi olarak tanımlanıyor

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]);
    //kurs ekleye basıldığında burdan yeni kurs eklenir  ...courses önceden eklenen kursu silmeyip üstüne
    //ekleme yapmak için kullanılır bu özellik js den gelmiştir react ile ilgisi yok
  };
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });
  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>
        Kurs Ekle
      </button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
