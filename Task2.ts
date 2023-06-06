type User = {
  name: string;
  age: number;
  group: string;
};

type Admin = {
  name: string;
  age: number;
  role: string;
}

const persons: (User | Admin)[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Ольга Николаева',
    age: 35,
    group: 'Семья',
  },
  {
    name: 'Игорь Иванов',
    age: 40,
    group: 'Друзья',
  },
  {
    name: 'Марат Нигматуллин',
    age: 41,
    group: 'Друзья',
  },
  {
    name: 'Дима Билан',
    age: 45,
    role: 'Администратор',
  }
];

const logPerson = (user: User | Admin) => {
  console.log(`${user.name}, ${user.age}`);
}

console.log('Users:');
persons.forEach(logPerson);
