import React from 'react';
import StudentsTable from './StudentsTable';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Лабораторная работа №7 | Многостраничные приложения</h1>
        <h2>Работу выполнил студент ПИ21-2 Ойболатов Рамазан</h2>
        <hr></hr>
        <StudentsTable/>
      </div>
    )
  }
}

export default Home;