// task 2
interface DirectorInterface {
    workFromHome(): string;
    takeCoffeeBreak(): string;
    performDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    takeCoffeeBreak(): string;
    performTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    takeCoffeeBreak(): string {
      return 'Taking a coffee break';
    }
  
    performDirectorTasks(): string {
      return 'Performing director tasks';
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
  
    takeCoffeeBreak(): string {
      return 'Cannot take a break';
    }
  
    performTeacherTasks(): string {
      return 'Performing teacher tasks';
    }
  }
  
  function createEmployee(salary: number | string): Teacher | Director {
    return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();
  }
  
  console.log(createEmployee(200));
  
  console.log(createEmployee(1000));
  
  console.log(createEmployee('$500'));
  
  const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;
  
  const executeWork = (employee: Teacher | Director): string => {
    let result;
    isDirector(employee) ? (result = (employee as Director).performDirectorTasks()) : (result = (employee as Teacher).performTeacherTasks());
    return result;
  };
  
  console.log(executeWork(createEmployee(200)));
  
  console.log(executeWork(createEmployee(1000)));
  
  type Subjects = 'Math' | 'History';
  
  const teachClass = (todayClass: Subjects): string => todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
  
  console.log(teachClass('Math'));
  
  console.log(teachClass('History'));
  