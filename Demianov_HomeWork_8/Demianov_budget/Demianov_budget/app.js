/**
 * !Income expenses
 * 
 * 1. Объект с массивами дохода и расхода
 * 2.UI Elements
 * 3. Функция генерации id
 * 4. Переключение дохода-расхода
 * 5. Добавление нового дохода
 * 6. Добавление нового расхода
 * 7. Создание новой строки доходов
 * 8. Добавление новой строки доходов
 * 9. Создание новой строки расходов
 * 10. Добавление новой строки расходов
 * 11. Суммирование значений в массивах доходов - расходов
 * 12. Функция вывода значения общего бюджета
 * 13. Функция удаления строки дохода
 * 14. Функция удаления строки разметки
 * 15. Удаление значения из хранилища
 * 
 */

//  1. Объект с массивами дохода и расхода 
const  storage = {
income : [],
expenses : []
};

// 2. UI Elements
const input_title = document.querySelector(".add__description");
const input_amount = document.querySelector(".add__value");
const button = document.querySelector(".add__btn");
const selector = document.querySelector(".add__type");
const income_list = document.querySelector(".income__list");
const expenses_list = document.querySelector(".expenses__list");
const budget_income_value = document.querySelector(".budget__income--value");
const budget_expenses_value = document.querySelector(".budget__expenses--value");
const budget_value = document.querySelector(".budget__value");


/**
 * Одна задача это объект из следующих полей
 * id - произвольная уникальная строка
 * title - заголовок дохода или расхода
 * amount - количество денег
 */
/**
 * 3. Функция генерации id
 */
const generate_id = () => {
    const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let idInit = '0000000000'.split('').reduce((prev, next) => prev + words[Math.floor(Math.random() * words.length)], "");
    return idInit
}


// 4.Переключение дохода-расхода

button.addEventListener("click", (e) => {
    if (!input_title.value || !input_amount.value) return alert("Заполните все поля");
    switch(selector.value) {
        case "income" :
        add_new_income(input_title.value, input_amount.value);
        break;
        case "expense" :
        add_new_expense(input_title.value, input_amount.value);
        break;
    };
});

// 5. Добавление нового дохода

/**
 * add_new_income - функция для добавления нового дохода
 * @param {title}  - заголовок дохода 
 * @param {amount}  - количество денег
 * @returns {void}
 */
const add_new_income = (title, amount) => {
    const new_income = { title, amount, id: generate_id() };
    storage.income.push(new_income);
    add_income_template(new_income);
    budget_income_value.innerHTML = sum_meaning (storage.income);
    result_budget();

    return storage.income;
}

// 6. Добавление нового расхода

/**
 * add_new_expense - функция для добавления нового расхода
 * @param {title}  - заголовок расхода 
 * @param {amount}  - количество денег
 * @returns {void}
 */
const add_new_expense = (title, amount) => {
    const new_expense = { title, amount, id: generate_id() };
    storage.expenses.push(new_expense);
    add_expense_template(new_expense);
    budget_expenses_value.innerHTML = "-" + sum_meaning(storage.expenses);
    result_budget();
    delete_string();
    return storage.expenses;

};



/**7. Создание новой строки доходов
 * 
 * @param {new_income} 
 */
const create_income_template = (new_income) => {
    return `
    <div class="item clearfix" id = ${new_income.id}>
    <div class="item__description">${new_income.title}</div>
    <div class="right clearfix">
        <div class="item__value">+ ${new_income.amount}</div>
        <div class="item__delete">
            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div>
    </div>
</div>
    `;
}

/**8. Добавление новой строки доходов
 * 
 * @param {new_income} 
 */

const add_income_template = (new_income) => {
    const template = create_income_template(new_income);
    income_list.insertAdjacentHTML("afterbegin", template);
    delete_string();
}

/**9. Создание новой строки расходов
 * 
 * @param {new_expense} 
 */
const create_expense_template = (new_expense) => {
    return `
    <div class="item clearfix" id=${new_expense.id}>
        <div class="item__description">${new_expense.title}</div>
        <div class="right clearfix">
        <div class="item__value">- ${new_expense.amount}</div>
            <div class="item__delete">
                 <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
            </div>
        </div>
    </div>

    `;
}

/**10. Добавление новой строки расходов
 * 
 * @param {new_expense} 
 */

const add_expense_template = (new_expense) => {
    const template = create_expense_template(new_expense);
    expenses_list.insertAdjacentHTML("afterbegin", template);
    delete_string();
}
/** 11. Суммирование значений в массивах доходов - расходов
 *
 * @param {storage.income || storage.expenses} 
 */

let sum_meaning = (meaning) =>
    meaning.map(x => x.amount).reduce((a, x) => a += Number(x), 0);

/**
 * 12. Функция вывода значения общего бюджета
 */
let result_budget = () => 
    budget_value.innerHTML = sum_meaning(storage.income) - sum_meaning(storage.expenses);

/**
 * 13. Функция удаления строки дохода
 */
let deleted_id;
let delete_string = function() {
let button_delete = document.querySelectorAll("button.item__delete--btn");
    
    for (i = 0; i < button_delete.length; i ++) {
        button_delete[i].addEventListener("click", (e) => {
        let target_element = e.target.parentNode.parentNode.parentNode.parentNode;
        deleted_id = target_element.getAttribute("id");
        delete_string_by_id(deleted_id);
        delete_element_from_storage(deleted_id);
        }
        )
    }
 }
 /**
  * 14. Функция удаления строки разметки
  * @param {*} id 
  */
 let delete_string_by_id = function(id) {
     let target = document.querySelector(`[id="${id}"]`);
     if (target) {
     const target_parent = target.parentElement;
     target_parent.removeChild(target);
     }
 }

 /**
  * 15. Удаление значения из хранилища
  * @param {*} id 
  */
 let delete_element_from_storage = function(id){
 storage.income = storage.income.filter(x => x.id !== id);
 storage.expenses = storage.expenses.filter(x => x.id !== id);
 budget_expenses_value.innerHTML = "-" + sum_meaning(storage.expenses);
 budget_income_value.innerHTML = sum_meaning (storage.income);
 result_budget();
}

