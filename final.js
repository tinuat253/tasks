var employeeList = [
    { id: 1, name: "tinu", managerId: null },
    { id: 2, name: "sai", managerId: 1 },
    { id: 3, name: "patter", managerId: 2 },
    { id: 4, name: "abhi", managerId: 3 },
    { id: 5, name: "shevil", managerId: 4 },
  ];
  
  topElement = employeeList.filter(emplo => emplo.managerId == null);
  
   function createStc(empList) {
    let empid = empList.map(emp => emp.id);
    employee.assignees = empList.filter((empid) => { return empid.managerId === topElement[0].id });
    console.log(employee.assignees);
  };
  
    console.log(JSON.stringify(topElement));
    let x = createStc(employeeList);
    console.log(x);
  
  
  
  
  
  