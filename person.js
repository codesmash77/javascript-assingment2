
class Person{
    constructor(name, age, salary, sex){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.sex = sex;
    }

//Static Recursive Quicksort function to sort a person array depending on the field and ordereal

    static quicksort(Persons, field, order){
        if(Persons.length==1){
            return Persons;
        }

        const pivot = Persons[Persons.length-1];
        const leftarr = [];
        const rightarr = [];
        for(let i=0; i<Persons.length -1; i++){
            if(order=='asc'){
                if(field=='name'){
                    if(Persons[i].name < pivot.name )
                        leftarr.push(Persons[i]);
                    else rightarr.push(Persons[i]);
                }
                else if(field=='age'){
                     if(Persons[i].age < pivot.age )
                        leftarr.push(Persons[i]);
                    else rightarr.push(Persons[i]);
                }
                else if(field=='salary'){
                     if(Persons[i].salary < pivot.salary )
                        leftarr.push(Persons[i]);
                    else rightarr.push(Persons[i]);
                }
                else{
                     if(Persons[i].sex < pivot.sex )
                        leftarr.push(Persons[i]);
                    else rightarr.push(Persons[i]);
                }
            }
            else{
                if(field=='name'){
                    if(Persons[i].name > pivot.name )
                        leftarr.push(Persons[i]);
                    else rightarr.push(Persons[i]);
                }
                else if(field=='age'){
                     if(Persons[i].age > pivot.age )
                        leftarr.push(Persons[i]);
                    else rightarr.push(Persons[i]);
                }
                else if(field=='salary'){
                     if(Persons[i].salary > pivot.salary )
                        leftarr.push(Persons[i]);
                    else rightarr.push(Persons[i]);
                }
                else{
                     if(Persons[i].sex > pivot.sex )
                        leftarr.push(Persons[i]);
                    else rightarr.push(Persons[i]);
                }
            }
        }

        if(leftarr.length > 0 && rightarr.length > 0){
            return [ ...Person.quicksort(leftarr,field,order), pivot , ...Person.quicksort(rightarr,field,order)];
        }
        else if(leftarr.length>0){
            return [ ...Person.quicksort(leftarr,field,order), pivot];
        }
        else return [ pivot , ...Person.quicksort(rightarr,field,order)];

    }

}

export default Person