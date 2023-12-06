import React, { useState, useEffect, useRef } from 'react';
import studentsData from '../students'; // Импортируем данные
import '../style.css'

const StudentsTable = () => {
  const fullNameRef = useRef();
  const groupRef = useRef();
  const attendanceScoresRef = useRef();
  const activityScoresRef = useRef();
  const homeworkScoresRef = useRef();
  const deleteButtonRef = useRef();
  var selectedCount = 0;

  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [filters, setFilters] = useState({
    fullName: '',
    group: '',
    attendance_scores: '',
    activity_scores: '',
    homework_scores: '',
    total: ''
  });
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const addStudent = () => {
    let fullName = fullNameRef.current.value
    let group = groupRef.current.value
    let attendanceScore = parseInt(attendanceScoresRef.current.value)
    let activityScores = parseInt(activityScoresRef.current.value)
    let homeworkScores = parseInt(homeworkScoresRef.current.value)
   
    let newStudent = {
      'fullName': fullName,
      'group': group,
      'attendance_scores': attendanceScore,
      'activity_scores': activityScores,
      'homework_scores': homeworkScores,
      'selected': false,
      'total': attendanceScore+activityScores+homeworkScores
    }

    setStudents(students => [...students, newStudent]);
  }

  useEffect(() => {
    setFilteredStudents(students)
  }, [students])

  // Загрузка данных при монтировании компонента
  useEffect(() => {
    setStudents(studentsData);
    setFilteredStudents(studentsData);
  }, []);

  // Функция для обновления списка студентов при изменении фильтров
  const applyFilters = (filterValues) => {
    let filtered = students.filter((student) => {
      return Object.keys(filterValues).every((key) => {
        if (!filterValues[key]) return true;
        if (['attendance_scores', 'activity_scores', 'homework_scores', 'total'].includes(key)) {
          return parseInt(student[key]) >= parseInt(filterValues[key]);
        }
        return String(student[key]).toLowerCase().includes(filterValues[key].toLowerCase());
      });
    });
    setFilteredStudents(filtered);
  };

  const deleteAllSelectedStudents = () => {
    const notSelectedStudents = students.filter(student => !student.selected)
    .map(student => {
      return { ...student, selected: false }
    })
    setStudents(notSelectedStudents)
    deleteButtonRef.current.classList.remove('active')
  }

  const selectStudent = (index) => {
    students[index].selected = !students[index].selected
    setStudents(students => [...students])
    checkForShowingDeleteButton()
  }

  const checkForShowingDeleteButton = () => {
    if (students.filter(student => student.selected).length > 0) {
      deleteButtonRef.current.classList.add('active')
    } else {
      deleteButtonRef.current.classList.remove('active')
    }
  }

  // Функция для сортировки списка студентов
  const sortStudents = (field) => {
    let order = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortBy(field);
    setSortOrder(order);

    let sortedStudents = [...filteredStudents].sort((a, b) => {
      let comparison = 0;
      if (field === 'attendance_scores' || field === 'activity_scores' || field === 'homework_scores') {
        comparison = a[field] - b[field];
      } else {
        if (a[field] > b[field]) {
          comparison = 1;
        } else if (a[field] < b[field]) {
          comparison = -1;
        }
      }
      return order === 'asc' ? comparison : -comparison;
    });

    setFilteredStudents(sortedStudents);
  };

  // Обработчик изменения фильтров
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    applyFilters({ ...filters, [name]: value });
  };

  return (
    <div className="container">
    <div className='filter'>
        <input
            type="text"
            placeholder="Фильтр по Ф.И.О"
            name="fullName"
            value={filters.fullName}
            onChange={handleFilterChange}
        />
        <input
            type="text"
            placeholder="Фильтр по группе"
            name="group"
            value={filters.group}
            onChange={handleFilterChange}
        />
        <input
            type="number"
            placeholder="Фильтр по посещаемости"
            name="attendance_scores"
            value={filters.attendance_scores}
            onChange={handleFilterChange}
        />
        <input
            type="number"
            placeholder="Фильтр по активности"
            name="activity_scores"
            value={filters.activity_scores}
            onChange={handleFilterChange}
        />
        <input
            type="number"
            placeholder="Фильтр по дом.работе"
            name="homework_scores"
            value={filters.homework_scores}
            onChange={handleFilterChange}
        />
        <input
            type="number"
            placeholder="Фильтр по итоговым"
            name="total"
            value={filters.total}
            onChange={handleFilterChange}
        />
    </div>
      
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>№</th>
            <th>Выбрать</th>
            <th onClick={() => sortStudents('fullName')}>Ф.И.О</th>
            <th onClick={() => sortStudents('group')}>Группа</th>
            <th onClick={() => sortStudents('attendance_scores')}>Посещаемость</th>
            <th onClick={() => sortStudents('activity_scores')}>Активность</th>
            <th onClick={() => sortStudents('homework_scores')}>Домашняя работа</th>
            <th>Итого</th>
            <th>Аттестован</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr className={`${student.selected ? 'selected' : ''} ${student.total < 7 ? 'notEnoughScores' : ''}`} key={index}>
              <td>{index+1}</td>
              <td><input checked={student.selected} onClick={() => {selectStudent(index)}} type='checkbox'></input></td>
              <td>{student.fullName}</td>
              <td>{student.group}</td>
              <td>{student.attendance_scores}</td>
              <td>{student.activity_scores}</td>
              <td>{student.homework_scores}</td>
              <td>{student.total}</td>
              <td>{student.total < 7 ? 'НЕТ' : 'ДА'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <form className='addStudentForm'>
        <div>
          <input defaultValue={"Силантьев Григорий Парамонович"} placeholder='Ф.И.О' type="text" id="fullName" ref={fullNameRef} />
        </div>
        <div>
          <input defaultValue={"ПИ21-3"} placeholder='Учебная группа' type="text" id="group" ref={groupRef} />
        </div>
        <div>
          <input defaultValue={3} placeholder='Баллы за посещаемость' type="number" min={0} max={5} id="attendanceScores" ref={attendanceScoresRef} />
        </div>
        <div>
          <input defaultValue={9} placeholder='Баллы за активность' type="number" min={0} max={10} id="activityeScores" ref={activityScoresRef} />
        </div>
        <div>
          <input defaultValue={5} placeholder='Баллы за домашнюю работу' type="number" min={0} max={5} id="homeworkScores" ref={homeworkScoresRef} />
        </div>
        <div>
          <button onClick={addStudent} type="button">Создать человека</button>
        </div>
      </form>

      <button onClick={deleteAllSelectedStudents} className="delete-button" ref={deleteButtonRef}>
        <i className="fas fa-trash-alt"></i> Удалить всех выбранных
      </button>
    </div>
  );
};

export default StudentsTable;
