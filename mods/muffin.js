// Muffins Mod for Sandboxels

elements.sweetened_milk = {
    color: "#fff4cc", 
    behavior: behaviors.LIQUID,
    category: "food",
    state: "liquid",
    density: 1030,
    tempHigh: 100,
    stateHigh: "steam",
    reactions: {
        "flour": { elem1: null, elem2: "muffin_dough" }
    }
};

elements.muffin_dough = {
    color: "#f2d7a1",
    behavior: behaviors.STICKY,
    category: "food",
    state: "solid",
    density: 600,
    tempHigh: 180,
    stateHigh: "muffin"
};

elements.burnt_muffin = {
    color: "#3b2a1a",
    behavior: behaviors.SOLID,
    category: "food",
    state: "solid",
    density: 550
};

elements.muffin.tempHigh = 260;
elements.muffin.stateHigh = "burnt_muffin";

elements.muffin = {
    color: ["#c68642", "#b87333"],
    behavior: behaviors.SOLID,
    category: "food",
    state: "solid",
    density: 500
  
};

elements.milk.reactions ??= {};
elements.milk.reactions.sugar = { elem1: "sweetened_milk", elem2: null };

elements.sugar.reactions ??= {};
elements.sugar.reactions.milk = { elem1: null, elem2: "sweetened_milk" };

