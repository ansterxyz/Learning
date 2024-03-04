let travel = 
{
    RouteName: "Приключения по Европе",
    Date: "08.07.2024 - 22.07.2024",
    Countries: ["Франция", "Испания", "Италия"],
    Cities: ["Париж", "Барселона", "Рим"],
    Attractions: ["Эйфелева башня", "Саграда Фамилия", "Колизей"],
    TraditionalDishes: ["Луковый суп", "Паэлья", "Пицца"]
};

    for (let property in travel) 
    {
        console.log(`${property}: ${travel[property]}`);
    }

    if (travel.Countries.length >= 3 && travel.Cities.length >= 3) 
    {
        console.log("Маршрут очень разнообразный и включает в себя несколько стран и городов!");
    } 
    else 
    {
        console.log("Маршрут менее разнообразный, рассмотрите добавление дополнительных мест.");
    }