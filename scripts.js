document.addEventListener('DOMContentLoaded', () => {
  // grandma recipe database (categories, ingredients, instructions)
  const recipeDatabase = [
    // viet
    { 
      id: 1, title: "Phở Bò (Beef Pho)", author: "Grandma Tuyet", cuisine: "Vietnamese", category: "Beef", time: "12 Hours", 
      image: "https://farm8.staticflickr.com/7087/7174177733_6c0af1a0b2_b.jpg", 
      desc: "Bone broth simmered overnight with charred ginger and star anise. The ultimate comfort bowl.",
      ingredients: ["Beef marrow bones", "Flat rice noodles", "Thinly sliced sirloin", "Star anise, cloves, cinnamon", "Fresh Thai basil & bean sprouts"],
      instructions: ["Char onions and ginger under a broiler.", "Simmer bones and spices on low for 12 hours, skimming the top.", "Strain broth and pour boiling hot over raw beef and noodles in a bowl."]
    },
    { 
      id: 2, title: "Gỏi Cuốn (Fresh Spring Rolls)", author: "Ba Noi Lan", cuisine: "Vietnamese", category: "Healthy", time: "20 Mins", 
      image: "https://plus.unsplash.com/premium_photo-1663850685051-8182d4bedc0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xRMDM3T1lCMkxJa3x8ZW58MHx8fHx8", 
      desc: "Packed with fresh mint, cilantro, shrimp, and pork belly. Dipped in peanut hoisin sauce.",
      ingredients: ["Rice paper wrappers", "Boiled shrimp (halved)", "Vermicelli noodles", "Mint and lettuce", "Peanut butter & hoisin sauce"],
      instructions: ["Dip rice paper briefly in warm water.", "Layer lettuce, noodles, herbs, and shrimp.", "Roll tightly like a burrito and serve with peanut hoisin dip."]
    },
    { 
      id: 3, title: "Bánh Mì Thịt (Pork Baguette)", author: "Auntie Mai", cuisine: "Vietnamese", category: "Lunch", time: "30 Mins", 
      image: "https://images.unsplash.com/photo-1715925717150-2a6d181d8846?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxRMDM3T1lCMkxJa3x8ZW58MHx8fHx8", 
      desc: "A crispy French baguette loaded with savory pork pate, pickled daikon, and fresh cilantro.",
      ingredients: ["Crispy baguette", "Pork liver pâté", "Vietnamese cold cuts (Chả lụa)", "Pickled carrots and daikon", "Fresh jalapeños and cilantro"],
      instructions: ["Slice the baguette and toast lightly.", "Spread a thick layer of pâté and mayonnaise on the bread.", "Layer meats, pickles, and top with jalapeños and cilantro."]
    },
    { 
      id: 4, title: "Bún Chả (Grilled Pork Noodles)", author: "Grandma Hoa", cuisine: "Vietnamese", category: "Dinner", time: "1 Hour", 
      image: "https://plus.unsplash.com/premium_photo-1661265967105-f8afb13a8135?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxRMDM3T1lCMkxJa3x8ZW58MHx8fHx8", 
      desc: "Smoky grilled pork patties served over cold rice noodles with a sweet and savory dipping broth.",
      ingredients: ["Ground pork", "Lemongrass & garlic", "Fish sauce & sugar", "Vermicelli noodles", "Green papaya slices"],
      instructions: ["Marinate ground pork with minced lemongrass, garlic, and fish sauce.", "Form into small patties and grill over charcoal.", "Serve in a bowl of warm, diluted sweet fish sauce with noodles on the side."]
    },
    { 
      id: 5, title: "Cơm Tấm (Broken Rice Plate)", author: "Uncle Minh", cuisine: "Vietnamese", category: "Breakfast", time: "45 Mins", 
      image: "https://images.unsplash.com/photo-1766050587783-1c90751275dd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxRMDM3T1lCMkxJa3x8ZW58MHx8fHx8", 
      desc: "A classic Saigon breakfast: fragmented rice topped with a grilled pork chop and a fried egg.",
      ingredients: ["Broken rice (Cơm tấm)", "Pork chops", "Scallion oil", "Egg", "Fish sauce dressing (Nước chấm)"],
      instructions: ["Steam the broken rice until fluffy.", "Grill marinated pork chops until caramelized.", "Top rice with the chop, a sunny-side-up egg, and a drizzle of scallion oil."]
    },
    { id: 6, title: "Bánh Xèo (Sizzling Crepe)", author: "Grandma Tuyet", cuisine: "Vietnamese", category: "Dinner", time: "40 Mins", image: "https://images.unsplash.com/photo-1583579366799-7106fb626a54?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xRMDM3T1lCMkxJa3x8ZW58MHx8fHx8", desc: "A crispy, turmeric-spiced rice crepe filled with pork, shrimp, and bean sprouts.", ingredients: ["Rice flour & turmeric", "Coconut milk", "Shrimp & diced pork", "Bean sprouts", "Mustard greens"], instructions: ["Whisk rice flour, turmeric, and coconut milk into a thin batter.", "Pour into a hot oiled skillet to form a thin crepe.", "Add shrimp, pork, and sprouts, fold in half, and serve wrapped in mustard greens."] },
    { id: 7, title: "Canh Chua (Sour Tamarind Soup)", author: "Ba Noi Lan", cuisine: "Vietnamese", category: "Healthy", time: "30 Mins", image: "https://i0.wp.com/www.wokandkin.com/wp-content/uploads/2021/02/Canh-Chua-saved-for-web.png?resize=720%2C1080&ssl=1", desc: "A vibrant, sweet and sour soup made with tamarind, pineapple, tomatoes, and catfish.", ingredients: ["Catfish steaks", "Tamarind paste", "Pineapple chunks", "Tomatoes & okra", "Rice paddy herb (Ngò ôm)"], instructions: ["Dissolve tamarind paste in boiling water or broth.", "Add catfish, pineapple, and tomatoes. Simmer until fish is cooked.", "Turn off heat, add okra, and garnish generously with fresh herbs."] },
    { id: 8, title: "Thịt Kho Tàu (Caramelized Pork)", author: "Auntie Mai", cuisine: "Vietnamese", category: "Dinner", time: "2 Hours", image: "https://images.unsplash.com/photo-1679310289677-fdcb43ffb6ee?w=1080", desc: "Tender pork belly and hard-boiled eggs braised in coconut water and caramelized sugar.", ingredients: ["Pork belly chunks", "Hard-boiled eggs", "Coconut water", "Fish sauce", "Brown sugar"], instructions: ["Melt sugar in a pot until it turns a dark caramel color.", "Add pork belly and stir to coat in the caramel.", "Pour in coconut water and fish sauce, add eggs, and braise on low for 90 minutes."] },
    { id: 9, title: "Chè Chuối (Banana Tapioca)", author: "Grandma Hoa", cuisine: "Vietnamese", category: "Desserts", time: "25 Mins", image: "https://www.savorysweetspoon.com/wp-content/uploads/2023/06/Che-Chuoi-1x1-1.jpg", desc: "A warm, comforting dessert soup made with sweet plantains, coconut cream, and tapioca pearls.", ingredients: ["Saba bananas (sliced)", "Tapioca pearls", "Coconut milk", "Sugar", "Crushed roasted peanuts"], instructions: ["Boil tapioca pearls until translucent.", "Add coconut milk, sugar, and sliced bananas to the pot.", "Simmer for 10 minutes and top with crushed peanuts before serving."] },
    { id: 10, title: "Cà Phê Sữa Đá (Iced Coffee)", author: "Uncle Minh", cuisine: "Vietnamese", category: "Breakfast", time: "10 Mins", image: "https://images.unsplash.com/photo-1770911066463-c822907a9671?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxRMDM3T1lCMkxJa3x8ZW58MHx8fHx8", desc: "Intensely strong dark roast coffee slowly dripped over rich, sweet condensed milk.", ingredients: ["Robusta coffee grounds", "Sweetened condensed milk", "Boiling water", "Ice cubes", "Phin filter"], instructions: ["Pour 2 tbsp of condensed milk into a glass.", "Place the Phin filter over the glass, add coffee grounds, and pour boiling water.", "Wait for the slow drip to finish, stir thoroughly, and pour over ice."] },

    // italian
    { 
      id: 11, title: "Spaghetti alla Carbonara", author: "Nonna Rosa", cuisine: "Italian", category: "Lunch", time: "30 Mins", 
      image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/0346a29a89ef229b1a0ff9697184f944/Derivates/cb5051204f4a4525c8b013c16418ae2904e737b7.jpg", 
      desc: "Authentic Roman carbonara using guanciale and pecorino. Absolutely no cream allowed!",
      ingredients: ["Spaghetti", "Guanciale", "Egg yolks & 1 whole egg", "Pecorino Romano", "Black pepper"],
      instructions: ["Boil pasta in salted water.", "Crisp guanciale in a dry pan.", "Whisk eggs and cheese. Toss hot pasta in the pan (off heat) with the egg mix and pasta water until creamy."]
    },
    { 
      id: 12, title: "Lasagna al Forno", author: "Grandma Maria", cuisine: "Italian", category: "Dinner", time: "3 Hours", 
      image: "https://thesageapron.com/wp-content/uploads/2022/02/Lasagna-22.jpg", 
      desc: "Layers of fresh pasta, slow-cooked Bolognese ragù, and creamy béchamel sauce.",
      ingredients: ["Fresh pasta sheets", "Beef & pork Bolognese", "Béchamel sauce (butter, flour, milk)", "Parmigiano-Reggiano"],
      instructions: ["Simmer Bolognese for 2 hours.", "Make béchamel sauce.", "Layer pasta, ragù, and béchamel in a baking dish. Bake at 375°F until golden and bubbling."]
    },
    { id: 13, title: "Risotto alla Milanese", author: "Zia Bianca", cuisine: "Italian", category: "Dinner", time: "45 Mins", image: "https://images.services.kitchenstories.io/I5gopz3xWRQtmFKv6kFSpHKU7ik=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R1790_final_photo_1.jpg", desc: "A luxurious, golden risotto infused with saffron threads and rich bone marrow.", ingredients: ["Arborio rice", "Saffron threads", "Beef broth", "Bone marrow or butter", "Parmesan"], instructions: ["Steep saffron in warm broth.", "Toast rice with marrow/butter, then deglaze with white wine.", "Slowly ladle in broth while stirring constantly until creamy. Finish with parmesan."] },
    { id: 14, title: "Bruschetta al Pomodoro", author: "Nonna Rosa", cuisine: "Italian", category: "Snack", time: "15 Mins", image: "https://www.spoonfulofflavor.com/wp-content/uploads/2025/04/Bruchetta-Al-Pomodoro-Upclose.jpg", desc: "Toasted rustic bread rubbed with raw garlic and topped with marinated heirloom tomatoes.", ingredients: ["Rustic bread", "Ripe tomatoes", "Fresh basil", "Garlic cloves", "Extra virgin olive oil"], instructions: ["Dice tomatoes and toss with olive oil, basil, salt, and pepper.", "Grill or toast thick slices of bread.", "Rub hot bread with a raw garlic clove and pile tomatoes on top."] },
    { id: 15, title: "Tiramisu Tradizionale", author: "Grandma Maria", cuisine: "Italian", category: "Desserts", time: "4 Hours", image: "https://ricetta.it/Uploads/Imgs/tiramisu-classico.jpg.webp", desc: "Coffee-soaked ladyfingers layered with a light, whipped mascarpone cream.", ingredients: ["Savoiardi (Ladyfingers)", "Espresso", "Mascarpone cheese", "Eggs & Sugar", "Cocoa powder"], instructions: ["Whisk egg yolks and sugar, then fold in mascarpone and whipped egg whites.", "Dip ladyfingers briefly in cold espresso.", "Layer cookies and cream. Chill for 4 hours, dust with cocoa before serving."] },
    { id: 16, title: "Focaccia Barese", author: "Zia Bianca", cuisine: "Italian", category: "Snack", time: "3 Hours", image: "https://www.elizabethminchilli.com/wp-content/uploads/2020/04/Focaccia-Barese-3-of-5.jpeg", desc: "A fluffy, olive-oil rich flatbread studded with cherry tomatoes and olives.", ingredients: ["Flour & yeast", "Mashed potato (secret ingredient)", "Cherry tomatoes", "Castelvetrano olives", "Olive oil"], instructions: ["Knead dough with a bit of mashed potato for softness. Let rise.", "Press into a heavily oiled pan. Dimple the dough with your fingers.", "Press tomatoes and olives into the dimples, drizzle with oil, and bake at 425°F."] },
    { id: 17, title: "Ossobuco alla Milanese", author: "Nonna Rosa", cuisine: "Italian", category: "Beef", time: "2.5 Hours", image: "https://www.gustiamo.com/gustiblog/wp-content/uploads/2009/10/ossobuco-alla-milanese.jpg", desc: "Cross-cut veal shanks braised with vegetables, white wine, and broth.", ingredients: ["Veal shanks", "Onion, carrot, celery", "White wine", "Beef broth", "Gremolata (lemon, garlic, parsley)"], instructions: ["Dredge shanks in flour and brown in a heavy pot.", "Remove meat, sauté vegetables, then deglaze with wine.", "Return meat, add broth, and braise on low for 2 hours. Top with fresh gremolata."] },
    { id: 18, title: "Ribollita (Tuscan Soup)", author: "Grandma Maria", cuisine: "Italian", category: "Healthy", time: "1 Hour", image: "https://thedefineddish.com/wp-content/uploads/2023/12/Tuscan-Ribollita-Soup-3-scaled.jpg", desc: "A hearty Tuscan stew made from leftover bread, cannellini beans, and winter greens.", ingredients: ["Stale rustic bread", "Cannellini beans", "Cavolo nero (Tuscan kale)", "Carrots & celery", "Olive oil"], instructions: ["Sauté vegetables, then add half the beans and broth. Simmer.", "Blend the other half of the beans and add to the pot to thicken.", "Tear stale bread into the soup, let it soften, and serve with a heavy drizzle of olive oil."] },
    { id: 19, title: "Gnocchi di Patate", author: "Zia Bianca", cuisine: "Italian", category: "Dinner", time: "1.5 Hours", image: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/ednhwgjp/571c8170-9810-42cd-989c-8176308d8ac7.png", desc: "Pillowy soft potato dumplings served in a simple brown butter and sage sauce.", ingredients: ["Russet potatoes", "00 Flour", "Egg yolk", "Butter", "Fresh sage"], instructions: ["Bake potatoes, scoop out the flesh, and pass through a ricer.", "Gently fold in egg yolk and just enough flour to form a dough.", "Roll into ropes, cut into pillows, boil until they float, then toss in brown butter."] },
    { id: 20, title: "Frittata di Zucchine", author: "Nonna Rosa", cuisine: "Italian", category: "Breakfast", time: "20 Mins", image: "https://www.tasteatlas.com/images/dishes/f9e74c4b21e44750bf0837dc8ce4ee58.jpg", desc: "A thick, rustic Italian omelet packed with thinly sliced zucchini and parmesan.", ingredients: ["Eggs", "Zucchini (thinly sliced)", "Parmigiano-Reggiano", "Olive oil", "Fresh mint"], instructions: ["Sauté zucchini in olive oil until golden and soft.", "Whisk eggs with cheese and mint, pour over the zucchini.", "Cook on low until edges set, then finish under the broiler until golden."] },

    // french
    { 
      id: 21, title: "Coq au Vin", author: "Grand-mère Sylvie", cuisine: "French", category: "Chicken", time: "2.5 Hours", 
      image: "https://www.saveur.com/uploads/2012/09/Photo_-Murray-Hall-_-Food-Styling_-Thu-Buser__250130-murrayhall-saveur-16-coq-au-vin-011-scaled.jpg?auto=webp", 
      desc: "Chicken braised slowly in red Burgundy wine with lardons, mushrooms, and pearl onions.",
      ingredients: ["Bone-in chicken thighs", "Red wine (Burgundy)", "Bacon lardons", "Pearl onions & mushrooms", "Fresh thyme"],
      instructions: ["Crisp the bacon and brown the chicken in the fat.", "Sauté onions and mushrooms, then return chicken to the pot.", "Pour in wine and herbs. Braise in the oven at 350°F for 90 minutes."]
    },
    { 
      id: 22, title: "Quiche Lorraine", author: "Tante Amélie", cuisine: "French", category: "Breakfast", time: "1 Hour", 
      image: "https://www.eatingwell.com/thmb/WQJJameVA8qPRJ-ai6v2w7MKHME=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7787187-c1ba3239e9e1421982fcc2092a87b772.jpg", 
      desc: "A buttery, flaky crust filled with a rich savory custard of heavy cream and bacon.",
      ingredients: ["Pie crust", "Bacon lardons", "Heavy cream", "Eggs", "Nutmeg"],
      instructions: ["Blind bake the pie crust for 15 minutes.", "Scatter cooked bacon evenly across the bottom of the crust.", "Whisk eggs, cream, and a pinch of nutmeg. Pour into crust and bake until set."]
    },
    { id: 23, title: "Ratatouille", author: "Grand-mère Sylvie", cuisine: "French", category: "Healthy", time: "1.5 Hours", image: "https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_3563,h_3563,c_limit/04102023-ratatouille-lede.jpg", desc: "A rustic Provençal vegetable stew with eggplant, zucchini, and summer tomatoes.", ingredients: ["Eggplant", "Zucchini & yellow squash", "Bell peppers", "Tomatoes", "Herbes de Provence"], instructions: ["Sauté each vegetable separately in olive oil to build flavor.", "Combine all vegetables in a heavy pot with crushed tomatoes and herbs.", "Simmer gently on low for 45 minutes until vegetables are meltingly tender."] },
    { id: 24, title: "Croque Monsieur", author: "Tante Amélie", cuisine: "French", category: "Lunch", time: "20 Mins", image: "https://hips.hearstapps.com/hmg-prod/images/croque-monsieur-66a219aa5f0b2.jpg?crop=1xw:0.8198221757322176xh;center,top&resize=1200:*", desc: "The ultimate ham and cheese sandwich, topped with béchamel and baked until bubbling.", ingredients: ["Brioche or thick white bread", "Gruyère cheese", "Jambon (Ham)", "Béchamel sauce", "Dijon mustard"], instructions: ["Spread mustard and béchamel on the bread. Layer with ham and Gruyère.", "Top with second slice of bread, smother in more béchamel and cheese.", "Bake until bubbling, then broil for 2 minutes to brown the cheese."] },
    { id: 25, title: "Crêpes Suzette", author: "Grand-mère Sylvie", cuisine: "French", category: "Desserts", time: "30 Mins", image: "https://www.afarmgirlsdabbles.com/wp-content/uploads/2024/04/crepes-suzette-afarmgirlsdabbles-01s.jpg", desc: "Thin, buttery crêpes bathed in a caramelized sauce of orange juice, zest, and Grand Marnier.", ingredients: ["Crêpe batter", "Butter & sugar", "Fresh orange juice & zest", "Grand Marnier (liqueur)"], instructions: ["Cook thin crêpes and fold them into quarters.", "Melt butter and sugar in a skillet until caramelized. Add orange juice.", "Place crêpes in the bubbling sauce, add Grand Marnier, and ignite to flambé."] },
    { id: 26, title: "Soupe à l'Oignon Gratinée", author: "Tante Amélie", cuisine: "French", category: "Dinner", time: "2 Hours", image: "https://brasseriemadeleine-orleans.fr/wp-content/uploads/2024/06/soupe-oignon-gratinee-delicieuse-et-reconfortante.webp", desc: "Deeply caramelized onions in a rich beef broth, topped with an oversized gruyère crouton.", ingredients: ["Yellow onions (lots of them)", "Beef stock", "Dry sherry or white wine", "Baguette slices", "Gruyère cheese"], instructions: ["Slowly caramelize sliced onions in butter for 45-60 minutes until deep brown.", "Deglaze with sherry, add beef stock, and simmer for 30 minutes.", "Ladle into crocks, top with a toasted baguette slice and a mountain of cheese. Broil."] },
    { id: 27, title: "Salade Niçoise", author: "Grand-mère Sylvie", cuisine: "French", category: "Healthy", time: "25 Mins", image: "https://www.foodandwine.com/thmb/bkXN0Yi5YrBJzFx--W99t1V0AVs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Salade-Nicoise-FT-RECIPE0823-c7e3617cc7d4455f90a26fffa7ac128b.jpg", desc: "A composed salad from Nice featuring tuna, green beans, hard-boiled eggs, and olives.", ingredients: ["Oil-packed tuna", "Haricots verts (green beans)", "Hard-boiled eggs", "Niçoise olives", "Lemon-Dijon vinaigrette"], instructions: ["Blanch the green beans and boil the potatoes until tender.", "Arrange lettuce on a platter. Artfully arrange beans, potatoes, tuna, eggs, and olives.", "Drizzle generously with the vinaigrette before serving."] },
    { id: 28, title: "Boeuf Bourguignon", author: "Tante Amélie", cuisine: "French", category: "Beef", time: "3.5 Hours", image: "https://www.thespruceeats.com/thmb/gEH_GL4ianQny5H8tfa_dBbF6qc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-classic-beef-bourguignon-recipe-7498352-hero-A-f3d470b196ee4c97acb778bc068eec13.jpg", desc: "A luxurious beef stew braised in red wine, historically a peasant dish turned haute cuisine.", ingredients: ["Beef chuck roast", "Bacon lardons", "Red Burgundy wine", "Beef stock", "Carrots & pearl onions"], instructions: ["Sear the beef chunks in bacon fat until deeply browned.", "Add carrots and onions, sprinkle with flour, and cook for 2 minutes.", "Add wine, stock, and herbs. Cover and braise in a 325°F oven for 3 hours."] },
    { id: 29, title: "Gougères", author: "Grand-mère Sylvie", cuisine: "French", category: "Desserts", time: "40 Mins", image: "https://www.chocolatesandchai.com/wp-content/uploads/2023/03/Gougeres-Featured.jpg", desc: "Airy, savory choux pastry puffs mixed with sharp Gruyère cheese.", ingredients: ["Water & butter", "All-purpose flour", "Eggs", "Gruyère cheese (grated)", "Pinch of nutmeg"], instructions: ["Boil water and butter. Dump in flour and stir vigorously to form a dough ball.", "Off heat, beat in eggs one at a time until the dough is glossy.", "Fold in cheese. Pipe mounds onto a baking sheet and bake at 400°F until puffed."] },
    { id: 30, title: "Omelette aux Fines Herbes", author: "Tante Amélie", cuisine: "French", category: "Breakfast", time: "10 Mins", image: "https://static01.nyt.com/images/2022/05/11/dining/JP-Fines-Herbes-Omelet/JP-Fines-Herbes-Omelet-mediumSquareAt3X.jpg", desc: "A classic French omelet: pale yellow on the outside, creamy inside, packed with fresh herbs.", ingredients: ["3 large eggs", "Butter", "Tarragon, chervil, chives, parsley", "Salt & white pepper"], instructions: ["Whisk eggs vigorously with chopped herbs until no streaks remain.", "Melt butter in a non-stick pan over medium heat. Pour in eggs.", "Stir rapidly while shaking the pan. When softly scrambled but wet, roll into a cylinder."] },

    // american
    { 
      id: 31, title: "Southern Fried Chicken", author: "Grandma Clara", cuisine: "American", category: "Chicken", time: "2 Hours", 
      image: "https://www.allrecipes.com/thmb/WSSoRAz2IygrMPkiJxHPbt9gqMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8635-southern-fried-chicken-ddmfs_4x3-90736ab31a7a4bb59eb04e2380ccebe7.jpg", 
      desc: "Buttermilk-brined chicken, dredged in seasoned flour and fried to a shatteringly crisp golden brown.",
      ingredients: ["Bone-in chicken pieces", "Buttermilk", "All-purpose flour", "Paprika, garlic powder, cayenne", "Peanut oil for frying"],
      instructions: ["Soak chicken in seasoned buttermilk for at least 2 hours.", "Dredge pieces in the spiced flour mixture until heavily coated.", "Fry in 350°F oil for 12-15 minutes until golden and cooked through."]
    },
    { 
      id: 32, title: "Baked Macaroni & Cheese", author: "Aunt Sue", cuisine: "American", category: "Dinner", time: "1 Hour", 
      image: "https://www.budgetbytes.com/wp-content/uploads/2023/03/BakedMacandCheesesidespoon.jpg", 
      desc: "A rich, gooey cheese sauce folded into elbow pasta and baked with a crispy breadcrumb topping.",
      ingredients: ["Elbow macaroni", "Sharp cheddar & Gruyère", "Whole milk & butter", "Flour", "Panko breadcrumbs"],
      instructions: ["Boil pasta until al dente. Create a roux with butter and flour, then whisk in milk.", "Melt in the cheeses to create a thick sauce. Stir in the pasta.", "Pour into a baking dish, top with panko, and bake at 375°F until bubbly."]
    },
    { id: 33, title: "Buttermilk Pancakes", author: "Grandma Clara", cuisine: "American", category: "Breakfast", time: "20 Mins", image: "https://natashaskitchen.com/wp-content/uploads/2022/05/Buttermilk-Pancakes-SQ.jpg", desc: "Tall, fluffy pancakes with a slight tang, swimming in real maple syrup.", ingredients: ["All-purpose flour", "Baking powder & soda", "Real buttermilk", "Egg & melted butter", "Maple syrup"], instructions: ["Whisk dry ingredients. In a separate bowl, whisk wet ingredients.", "Gently fold wet into dry until just combined (lumps are fine).", "Cook on a hot buttered griddle until bubbles pop on the surface, then flip."] },
    { id: 34, title: "Texas Red Chili", author: "Uncle Bob", cuisine: "American", category: "Beef", time: "3 Hours", image: "https://www.thecookierookie.com/wp-content/uploads/2024/05/featured-texas-chili-recipe.jpg", desc: "A strict 'no beans' chili made with chunks of beef chuck and a rich, dried chili paste.", ingredients: ["Beef chuck roast (cubed)", "Dried Ancho & Guajillo chiles", "Onion & garlic", "Cumin & oregano", "Beef broth"], instructions: ["Toast and soak dried chiles, then blend into a smooth puree.", "Brown the beef chunks in a heavy pot. Sauté onions and garlic.", "Add the chili puree and broth. Simmer on low for 2.5 hours until meat is tender."] },
    { id: 35, title: "New England Clam Chowder", author: "Aunt Sue", cuisine: "American", category: "Lunch", time: "45 Mins", image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Contest-Winning-New-England-Clam-Chowder_EXPS_FT24_41095_EC_021424_3.jpg", desc: "A thick, creamy soup packed with tender clams, diced potatoes, and smoky bacon.", ingredients: ["Chopped clams (fresh or canned)", "Bacon", "Potatoes (diced)", "Heavy cream", "Oyster crackers"], instructions: ["Render the bacon until crisp. Sauté onions and celery in the fat.", "Add potatoes and clam juice, simmering until potatoes are tender.", "Stir in cream and clams. Simmer for 2 minutes (do not boil) and serve."] },
    { id: 36, title: "Classic Cheeseburger", author: "Uncle Bob", cuisine: "American", category: "Beef", time: "15 Mins", image: "https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1749310239&s=463b18fc3bb51dc5d96e866c848527c4", desc: "A smashed beef patty with a caramelized crust, melted American cheese, and pickles on a soft bun.", ingredients: ["80/20 Ground beef", "American cheese slices", "Brioche buns", "Dill pickles", "Ketchup & mustard"], instructions: ["Form beef into loose balls. Place in a hot cast-iron pan and smash flat.", "Season generously with salt and pepper. Cook 2 mins until a hard crust forms.", "Flip, immediately add cheese, and cover to melt. Serve on a toasted bun."] },
    { id: 37, title: "Deviled Eggs", author: "Grandma Clara", cuisine: "American", category: "Snack", time: "25 Mins", image: "https://www.simplyrecipes.com/thmb/PgaSJNCPTFWGQmRgqvgsf6luMgk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Million-Dollar-Deviled-Eggs-LEAD-1-ce9c56d08ea1452090ae7e9308afd3e7.jpg", desc: "A staple of American potlucks: hard-boiled eggs with a creamy, tangy, mustard-laced yolk filling.", ingredients: ["Large eggs", "Mayonnaise", "Yellow mustard", "Sweet pickle relish", "Paprika (for dusting)"], instructions: ["Hard boil the eggs, cool, peel, and slice in half lengthwise.", "Pop the yolks into a bowl and mash with mayo, mustard, and relish.", "Pipe the mixture back into the egg whites and dust with paprika."] },
    { id: 38, title: "BLT Sandwich", author: "Aunt Sue", cuisine: "American", category: "Lunch", time: "10 Mins", image: "https://www.budgetbytes.com/wp-content/uploads/2025/08/Classic-BLT-Front-Wide-Shot.jpg", desc: "The perfect balance of salty bacon, crisp lettuce, and juicy summer tomatoes.", ingredients: ["Thick-cut bacon", "Heirloom tomatoes", "Iceberg or Romaine lettuce", "White toast", "Mayonnaise"], instructions: ["Bake or fry bacon until perfectly crisp. Drain on paper towels.", "Toast the bread and spread a thick layer of mayo on both slices.", "Layer lettuce, thick tomato slices (salted!), and bacon. Slice diagonally."] },
    { id: 39, title: "Biscuits and Sausage Gravy", author: "Uncle Bob", cuisine: "American", category: "Breakfast", time: "30 Mins", image: "https://www.southernliving.com/thmb/WbEhZK0pFnoYuJlHpFqGF0Qivcg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sausage_Gravy_and_Biscuits_013-26a0d86af1e040b79ba39e51f553ee7e.jpg", desc: "Flaky buttermilk biscuits smothered in a peppery, creamy pork sausage gravy.", ingredients: ["Breakfast sausage", "Flour", "Whole milk", "Lots of black pepper", "Fresh baked biscuits"], instructions: ["Brown the sausage in a skillet. Do not drain the fat.", "Sprinkle flour over the sausage and cook for 2 minutes to create a roux.", "Slowly whisk in milk and simmer until thick. Season heavily with black pepper."] },
    { id: 40, title: "Homemade Apple Pie", author: "Grandma Clara", cuisine: "American", category: "Desserts", time: "2 Hours", image: "https://www.simplyrecipes.com/thmb/K5IgYOOXKINV_HOkJu9_izagyMc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Apple-Pie-LEAD-06-f79f622d5af1497f8e4999766e29985d.jpg", desc: "A double-crust pie filled with warmly spiced, tart Granny Smith apples.", ingredients: ["Pie crust dough", "Granny Smith apples", "Cinnamon & nutmeg", "Sugar", "Butter"], instructions: ["Peel, slice, and toss apples with sugar and spices.", "Line a pie dish with dough, mound the apples inside, and dot with butter.", "Cover with top crust, crimp edges, cut vents, and bake at 375°F for 50 minutes."] },

    // japanese
    { 
      id: 41, title: "Tonkatsu (Pork Cutlet)", author: "Obaasan Yoko", cuisine: "Japanese", category: "Dinner", time: "30 Mins", 
      image: "https://www.justonecookbook.com/wp-content/uploads/2024/09/Tonkatsu-Japanese-Pork-Cutlet-0013-I-1.jpg", 
      desc: "A thick pork loin coated in airy panko breadcrumbs and deep-fried until perfectly crisp.",
      ingredients: ["Pork loin chops", "Panko breadcrumbs", "Flour & Egg", "Shredded cabbage", "Tonkatsu sauce"],
      instructions: ["Tenderize pork chops and season with salt and pepper.", "Dredge in flour, dip in egg, and coat heavily in panko.", "Fry in 350°F oil until golden. Serve sliced alongside shredded cabbage and sauce."]
    },
    { 
      id: 42, title: "Tamagoyaki (Rolled Omelet)", author: "Auntie Megumi", cuisine: "Japanese", category: "Breakfast", time: "15 Mins", 
      image: "https://static01.nyt.com/images/2019/07/16/dining/kwr-tamagoyaki/kwr-tamagoyaki-threeByTwoLargeAt2X.jpg", 
      desc: "A sweet and savory rolled egg omelet, cooked in delicate layers in a rectangular pan.",
      ingredients: ["Eggs", "Dashi stock", "Mirin (sweet cooking wine)", "Soy sauce", "Sugar"],
      instructions: ["Whisk eggs with dashi, mirin, soy sauce, and sugar.", "Pour a thin layer into an oiled tamagoyaki pan. Roll the egg to one side.", "Pour another layer, lifting the rolled egg to let it flow underneath. Roll again. Repeat."]
    },
    { id: 43, title: "Miso Shiru (Miso Soup)", author: "Obaasan Yoko", cuisine: "Japanese", category: "Healthy", time: "15 Mins", image: "https://lornahealth.com/app/uploads/2018/05/miso-shiru-soup.jpg", desc: "A deeply savory daily soup made from dashi stock and fermented soybean paste.", ingredients: ["Awase Miso paste", "Dashi stock (kombu & bonito)", "Silken tofu", "Wakame seaweed", "Scallions"], instructions: ["Heat dashi stock in a pot and add dried wakame to rehydrate.", "Add cubed silken tofu and warm gently.", "Turn off heat. Place miso in a ladle, add broth to dissolve it, then stir into the soup."] },
    { id: 44, title: "Onigiri (Rice Balls)", author: "Auntie Megumi", cuisine: "Japanese", category: "Snack", time: "20 Mins", image: "https://pickledplum.com/wp-content/uploads/2018/04/onigiri-rice-ball-22.jpg", desc: "Triangular molded sushi rice filled with savory fillings and wrapped in crisp nori.", ingredients: ["Short-grain Japanese rice", "Canned tuna & mayo (filling)", "Salt", "Nori (seaweed) sheets"], instructions: ["Cook short-grain rice and let it cool slightly.", "Wet hands with salted water. Place a scoop of rice in your palm and make an indent.", "Add tuna mayo filling, cover with rice, shape into a triangle, and wrap with nori."] },
    { id: 45, title: "Okonomiyaki (Savory Pancake)", author: "Obaasan Yoko", cuisine: "Japanese", category: "Dinner", time: "30 Mins", image: "https://www.justonecookbook.com/wp-content/uploads/2024/02/Okonomiyaki-5888-I.jpg", desc: "A griddle-cooked cabbage pancake filled with pork belly and topped with sweet sauce and mayo.", ingredients: ["Cabbage (finely shredded)", "Flour, eggs, & dashi", "Thin pork belly slices", "Okonomiyaki sauce & Kewpie mayo", "Bonito flakes (Katsuobushi)"], instructions: ["Mix flour, dashi, eggs, and shredded cabbage into a batter.", "Pour onto a hot griddle, lay pork slices on top, and cook until golden. Flip.", "Slather with okonomiyaki sauce, drizzle with mayo in a zigzag, and top with bonito flakes."] },
    { id: 46, title: "Zaru Soba (Cold Noodles)", author: "Auntie Megumi", cuisine: "Japanese", category: "Lunch", time: "15 Mins", image: "https://i1.wp.com/www.husbandsthatcook.com/wp-content/uploads/2016/07/zaru-soba.jpg?fit=2048%2C1365&ssl=1", desc: "Chilled buckwheat noodles served on a bamboo tray with a savory dipping sauce.", ingredients: ["Soba (buckwheat noodles)", "Mentsuyu (dipping sauce)", "Scallions", "Wasabi", "Shredded nori"], instructions: ["Boil soba noodles, then immediately rinse under ice-cold water to chill.", "Serve noodles on a bamboo mat (zaru) topped with shredded nori.", "Mix scallions and wasabi into the dipping sauce and dip the cold noodles to eat."] },
    { id: 47, title: "Nikujaga (Meat and Potato Stew)", author: "Obaasan Yoko", cuisine: "Japanese", category: "Beef", time: "45 Mins", image: "https://www.justonecookbook.com/wp-content/uploads/2021/05/Nikujaga-6915-I.jpg", desc: "The essence of Japanese home cooking: thinly sliced beef simmered with potatoes in a sweet soy broth.", ingredients: ["Thinly sliced beef", "Potatoes (cubed)", "Onion & Carrots", "Soy sauce, sake, mirin, sugar", "Dashi broth"], instructions: ["Sauté beef and onions in a pot. Add potatoes and carrots.", "Pour in dashi, soy sauce, sake, mirin, and sugar.", "Simmer with a drop lid (otoshibuta) for 20 minutes until potatoes are easily pierced."] },
    { id: 48, title: "Yakitori (Grilled Chicken)", author: "Uncle Kenji", cuisine: "Japanese", category: "Snack", time: "30 Mins", image: "https://hips.hearstapps.com/hmg-prod/images/chicken-yakitori-index-65e738c4f032e.jpg?crop=0.8891491784610379xw:1xh;center,top&resize=1200:*", desc: "Charcoal-grilled chicken skewers glazed with a sweet and sticky soy tare sauce.", ingredients: ["Chicken thighs", "Scallions", "Soy sauce", "Mirin & Sake", "Sugar"], instructions: ["Simmer soy sauce, mirin, sake, and sugar until thick to make the 'tare' glaze.", "Thread alternating pieces of chicken and scallion onto bamboo skewers.", "Grill over high heat, brushing heavily with the glaze until charred and sticky."] },
    { id: 49, title: "Chawanmushi (Egg Custard)", author: "Obaasan Yoko", cuisine: "Japanese", category: "Desserts", time: "25 Mins", image: "https://www.chopstickchronicles.com/wp-content/uploads/2016/08/chawanmushi-2-3.jpg", desc: "A delicate, savory steamed egg custard served in a teacup, hiding shrimp and mushrooms inside.", ingredients: ["Eggs", "Dashi stock", "Soy sauce & mirin", "Shrimp & chicken pieces", "Shiitake mushrooms"], instructions: ["Gently whisk eggs with dashi, soy sauce, and mirin. Strain for silkiness.", "Place raw shrimp, chicken, and mushrooms in the bottom of a heatproof teacup.", "Pour the egg mixture over the ingredients, cover, and gently steam for 15 minutes."] },
    { id: 50, title: "Oyakodon (Chicken & Egg Bowl)", author: "Auntie Megumi", cuisine: "Japanese", category: "Lunch", time: "20 Mins", image: "https://www.justonecookbook.com/wp-content/uploads/2022/10/Oyakodon-0613-I.jpg", desc: "A poetic dish translating to 'Parent and Child': chicken and egg simmered together over rice.", ingredients: ["Chicken thigh (bite-sized)", "Eggs (lightly beaten)", "Onion (sliced)", "Dashi, soy sauce, mirin", "Steamed rice"], instructions: ["Simmer the onion and chicken in a shallow pan with dashi, soy sauce, and mirin.", "Once the chicken is cooked, pour the beaten eggs evenly over the pan.", "Cover for 30 seconds until eggs are soft-set, then slide everything directly over a bowl of rice."] }
  
  // spain
  ,{ 
    id: 51, title: "Paella Valenciana", author: "Abuela Carmen", cuisine: "Spain", category: "Dinner", time: "1.5 Hours", 
    image: "https://www.ice.edu/sites/default/files/styles/width_1000/public/2025-07/paella.jpg.webp?itok=SwRkd106", 
    desc: "A saffron-infused rice dish cooked over an open flame with rabbit, chicken, and wide green beans.",
    ingredients: ["Bomba rice", "Chicken thighs & rabbit (or extra chicken)", "Saffron threads", "Flat green beans & butter beans", "Chicken broth"],
    instructions: ["Brown the meat in a wide paella pan.", "Add the beans, tomatoes, and paprika, frying gently.", "Pour in broth and saffron. Bring to a boil.", "Sprinkle rice evenly in a cross pattern. Simmer without stirring until liquid is absorbed and a 'socarrat' (crust) forms."]
  },
  { id: 52, title: "Tortilla Española", author: "Tía Pilar", cuisine: "Spain", category: "Breakfast", time: "40 Mins", image: "https://mojo.generalmills.com/api/public/content/9xIHKwJDH0-1wbHPsVCCVQ_webp_base.webp?v=8087d5ec&t=0bdbdc74657247fa80c54e658066c0da", desc: "A thick, comforting Spanish omelette made with thinly sliced potatoes and onions slowly olive-oil poached.", ingredients: ["Potatoes (sliced thin)", "Yellow onion", "Large eggs", "Extra virgin olive oil", "Sea salt"], instructions: ["Slowly fry potatoes and onions in a generous amount of olive oil until soft.", "Drain the oil and mix the hot potatoes into beaten eggs.", "Pour mixture into a pan and cook slowly. Flip carefully using a plate, and cook the other side until just set."] },
  { id: 53, title: "Gambas al Ajillo", author: "Abuela Carmen", cuisine: "Spain", category: "Snack", time: "15 Mins", image: "https://www.seriouseats.com/thmb/BxnmKTu3011FnjOEYaKlqGbRUzE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spanish-style-garlic-shrimp-gambas-al-ajillo-recipe_hero-01_1-ecd4c168c99541afaa7106b1f957020c.JPG", desc: "Sizzling garlic shrimp cooked in a clay pot with olive oil and dried chilies.", ingredients: ["Large shrimp (peeled)", "Garlic (lots, sliced)", "Dried chili peppers", "Olive oil", "Crusty bread"], instructions: ["Heat olive oil in a clay dish until shimmering.", "Add garlic and chilies, frying until fragrant but not brown.", "Drop in shrimp and cook for 2 minutes until pink. Serve immediately with bread to soak up the oil."] },
  { id: 54, title: "Patatas Bravas", author: "Tía Pilar", cuisine: "Spain", category: "Snack", time: "45 Mins", image: "https://tastesbetterfromscratch.com/wp-content/uploads/2025/03/Patatas-Bravas25-1.jpg", desc: "Crispy fried potato cubes smothered in a spicy paprika tomato sauce.", ingredients: ["Potatoes (cubed)", "Smoked paprika (Pimentón)", "Tomato puree", "Garlic & onion", "Olive oil for frying"], instructions: ["Fry potato cubes on medium heat until tender, then high heat to crisp.", "Sauté garlic and onion, stir in paprika and tomato puree.", "Blend the sauce until smooth and pour generously over the hot crispy potatoes."] },
  { id: 55, title: "Gazpacho Andaluz", author: "Abuela Carmen", cuisine: "Spain", category: "Healthy", time: "15 Mins", image: "https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,h_599,q_auto:low/SFS_Creamy-Gazpacho-Andaluz_021_vlzr2f", desc: "A refreshing, chilled tomato and vegetable soup perfect for hot summer days.", ingredients: ["Ripe Roma tomatoes", "Cucumber", "Green bell pepper", "Sherry vinegar", "Day-old bread"], instructions: ["Soak bread in a little water and vinegar.", "Blend tomatoes, cucumber, pepper, garlic, and soaked bread until smooth.", "Slowly drizzle in olive oil while blending to emulsify. Chill for 2 hours before serving."] },
  { id: 56, title: "Churros con Chocolate", author: "Tía Pilar", cuisine: "Spain", category: "Desserts", time: "30 Mins", image: "https://delishglobe.com/wp-content/uploads/2024/10/Churros-con-Chocolate-Recipe.png", desc: "Crispy, star-shaped fried dough served with a cup of incredibly thick, hot drinking chocolate.", ingredients: ["Flour, water, salt (for dough)", "Sugar & cinnamon", "Dark chocolate", "Cornstarch & milk"], instructions: ["Boil water, mix in flour rapidly to form dough, and pipe through a star nozzle into hot oil.", "Fry until golden, then toss in cinnamon sugar.", "Melt chocolate in milk and thicken with a pinch of cornstarch for dipping."] },
  { id: 57, title: "Fabada Asturiana", author: "Abuela Carmen", cuisine: "Spain", category: "Dinner", time: "3 Hours", image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Fabada_en_cazuela_de_barro.jpg", desc: "A rich, heavy bean stew from Asturias packed with chorizo, morcilla, and pork belly.", ingredients: ["Large white fabes (beans)", "Spanish Chorizo", "Morcilla (blood sausage)", "Pork belly (Panceta)", "Saffron"], instructions: ["Soak beans overnight.", "Place all ingredients in a heavy pot, cover with water, and bring to a boil.", "Simmer very gently on low for 2.5 hours without stirring (shake the pot instead)."] },
  { id: 58, title: "Pan con Tomate", author: "Tía Pilar", cuisine: "Spain", category: "Breakfast", time: "10 Mins", image: "https://www.seriouseats.com/thmb/9Dj-zumWHlL_QcPB3dyBb2Q6DCk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pan-con-tomate-tomato-bread-spanish-recipe-12-45ce91dfa54c43c89086b788067ebb8f.jpg", desc: "The ultimate minimalist breakfast: toasted rustic bread rubbed with raw tomato, garlic, and oil.", ingredients: ["Rustic bread", "Overripe tomatoes", "Garlic clove", "Flaky sea salt", "Olive oil"], instructions: ["Toast the bread until very crisp.", "Slice garlic in half and rub it raw across the rough bread.", "Slice tomatoes in half and rub the flesh vigorously onto the bread. Drizzle with oil and salt."] },
  { id: 59, title: "Pollo al Ajillo", author: "Abuela Carmen", cuisine: "Spain", category: "Chicken", time: "45 Mins", image: "https://foodandjourneys.net/wp-content/uploads/2017/02/Spanish-Garlic-Chicken-Pollo-Al-Ajillo-PIC1.jpg", desc: "Chicken chopped into small pieces on the bone, fried until crispy with a mountain of garlic and white wine.", ingredients: ["Whole chicken (cut into small pieces)", "1 whole head of garlic", "Dry white wine", "Fresh parsley", "Olive oil"], instructions: ["Season chicken. Fry unpeeled garlic cloves in oil to flavor it, then remove.", "Fry chicken in the garlic oil until deeply browned.", "Return garlic, add wine, and simmer until reduced to a sticky sauce. Garnish with parsley."] },
  { id: 60, title: "Crema Catalana", author: "Tía Pilar", cuisine: "Spain", category: "Desserts", time: "2 Hours", image: "https://www.daringgourmet.com/wp-content/uploads/2020/03/Crema-Catalana-2-square-edit-scaled.jpg", desc: "A silky, milk-based custard infused with citrus and cinnamon, topped with a burnt sugar crust.", ingredients: ["Whole milk", "Egg yolks", "Sugar", "Lemon & orange peel", "Cinnamon stick"], instructions: ["Infuse milk with citrus peels and cinnamon. Strain.", "Whisk egg yolks and sugar, pour in warm milk, and thicken gently on the stove.", "Pour into clay ramekins, chill, and torch sugar on top right before serving."] },

  // south korea
  { 
    id: 61, title: "Bibimbap", author: "Halmoni Sun-hee", cuisine: "South Korea", category: "Healthy", time: "40 Mins", 
    image: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-03-bimbimbap%2Fbibimbap-074", 
    desc: "A warm bowl of rice topped with vibrant sautéed vegetables, beef, a fried egg, and spicy gochujang.",
    ingredients: ["Short-grain rice", "Spinach, carrots, shiitake, bean sprouts", "Ground beef", "Gochujang (chili paste)", "Egg & Sesame oil"],
    instructions: ["Blanch and season each vegetable separately with sesame oil and salt.", "Sauté the ground beef with a splash of soy sauce.", "Assemble over rice, top with a fried egg, and mix thoroughly with gochujang before eating."]
  },
  { id: 62, title: "Kimchi Jjigae", author: "Auntie Ji-woo", cuisine: "South Korea", category: "Dinner", time: "30 Mins", image: "https://www.koreanbapsang.com/wp-content/uploads/2014/03/DSC5897-2-e1742780436647.jpg", desc: "A bubbling, spicy stew made with deeply fermented kimchi and fatty pork.", ingredients: ["Aged, sour kimchi", "Pork belly chunks", "Tofu", "Gochugaru (chili flakes)", "Scallions"], instructions: ["Sauté pork belly and sour kimchi in a pot until fragrant.", "Add water or anchovy stock and gochugaru. Bring to a boil.", "Simmer for 15 minutes, add tofu and scallions, and serve bubbling hot with rice."] },
  { id: 63, title: "Beef Bulgogi", author: "Halmoni Sun-hee", cuisine: "South Korea", category: "Beef", time: "40 Mins", image: "https://easyweeknightrecipes.com/wp-content/uploads/2022/09/Beef-Bulgogi38546.jpg", desc: "Thinly sliced ribeye marinated in a sweet and savory soy-pear sauce, grilled quickly over high heat.", ingredients: ["Thinly sliced ribeye", "Asian pear (grated)", "Soy sauce & brown sugar", "Sesame oil", "Garlic & onions"], instructions: ["Blend pear, soy sauce, garlic, and sugar. Marinate beef for 30 mins.", "Heat a cast-iron pan or grill until smoking.", "Sear beef quickly so it caramelizes but stays tender. Serve with lettuce wraps."] },
  { id: 64, title: "Tteokbokki", author: "Auntie Ji-woo", cuisine: "South Korea", category: "Snack", time: "20 Mins", image: "https://tiffanyangela.com/wp-content/uploads/2020/09/Tteokbokki-8-scaled.jpg", desc: "Chewy, cylindrical rice cakes simmered in a fiery, sweet, and sticky red chili sauce.", ingredients: ["Garaetteok (cylinder rice cakes)", "Fish cakes (Eomuk)", "Gochujang & Gochugaru", "Sugar", "Hard-boiled eggs"], instructions: ["Boil anchovy broth and stir in gochujang, gochugaru, and sugar.", "Add rice cakes and fish cakes. Simmer until the sauce reduces and clings to the cakes.", "Top with a hard-boiled egg and scallions."] },
  { id: 65, title: "Japchae", author: "Halmoni Sun-hee", cuisine: "South Korea", category: "Lunch", time: "35 Mins", image: "https://www.recipetineats.com/uploads/2023/07/Japchae-Korean-noodles_9.jpg", desc: "Sweet potato glass noodles stir-fried with colorful vegetables and seasoned with sweet soy.", ingredients: ["Dangmyeon (glass noodles)", "Spinach, bell peppers, carrots", "Beef strips", "Soy sauce & sugar", "Sesame seeds"], instructions: ["Boil noodles until chewy, rinse, and toss with sesame oil.", "Stir-fry beef and each vegetable separately.", "Toss everything together in a large bowl with soy sauce, sugar, and sesame seeds."] },
  { id: 66, title: "Haemul Pajeon", author: "Auntie Ji-woo", cuisine: "South Korea", category: "Snack", time: "20 Mins", image: "https://static01.nyt.com/images/2026/02/17/multimedia/17FD-EK-Haemul-Pajeon-Seafood-Pancakes-phlc/17FD-EK-Haemul-Pajeon-Seafood-Pancakes-phlc-mediumSquareAt3X.jpg", desc: "A crispy, savory pancake packed with fresh scallions and an assortment of seafood.", ingredients: ["Scallions (lots)", "Mixed seafood (shrimp, squid)", "Pancake mix or flour/cornstarch", "Ice water", "Soy-vinegar dipping sauce"], instructions: ["Mix flour with ice water to create a light batter.", "Lay scallions flat in a hot oiled pan, top with seafood, and pour batter over.", "Fry until very crispy, flip, and serve hot with dipping sauce."] },
  { id: 67, title: "Dak Galbi", author: "Halmoni Sun-hee", cuisine: "South Korea", category: "Chicken", time: "40 Mins", image: "https://www.maangchi.com/wp-content/uploads/2013/11/dakgalbi-recipe1-scaled.jpg", desc: "Spicy stir-fried chicken cooked at the table with sweet potatoes, cabbage, and rice cakes.", ingredients: ["Chicken thighs", "Sweet potato & cabbage", "Gochujang & curry powder", "Tteok (rice cakes)", "Perilla leaves"], instructions: ["Marinate chicken in a heavy gochujang and curry powder sauce.", "Stir-fry chicken and hard vegetables in a large flat pan.", "Add cabbage and rice cakes at the end. (Optional: melt cheese over the top!)"] },
  { id: 68, title: "Gyeran Mari", author: "Auntie Ji-woo", cuisine: "South Korea", category: "Breakfast", time: "15 Mins", image: "https://koreancuisinerecipes.com/wp-content/uploads/2022/05/Gyeran-Mari-%EA%B3%84%EB%9E%80-%EB%A7%90%EC%9D%B4.jpg", desc: "A tightly rolled, savory egg omelette speckled with finely minced vegetables.", ingredients: ["Eggs", "Carrot (finely minced)", "Scallion (finely minced)", "Salt", "Cooking oil"], instructions: ["Whisk eggs with minced vegetables and salt.", "Pour a thin layer in a pan, wait for it to set, and roll it halfway.", "Pour more egg into the empty space, roll again, and repeat until you have a thick log."] },
  { id: 69, title: "Sundubu Jjigae", author: "Halmoni Sun-hee", cuisine: "South Korea", category: "Healthy", time: "20 Mins", image: "https://omnivorescookbook.com/wp-content/uploads/2020/09/200806_Soondubu-Jjigae_800.jpg", desc: "A volcanic, spicy stew featuring extra-soft silken tofu and seafood.", ingredients: ["Silken tofu (Sundubu)", "Clams or shrimp", "Gochugaru & garlic oil", "Anchovy broth", "Raw egg"], instructions: ["Fry gochugaru and garlic in oil to make a spicy base.", "Add broth and seafood. Bring to a rapid boil.", "Gently slide in large chunks of silken tofu. Crack a raw egg into the boiling stew right before serving."] },
  { id: 70, title: "Gimbap", author: "Auntie Ji-woo", cuisine: "South Korea", category: "Lunch", time: "45 Mins", image: "https://www.seriouseats.com/thmb/WtcBGMWbdUcAIVe8zg4VCm2aqc4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__01__20200122-gimbap-vicky-wasik-24-f5ed1075f35846a29e0812ee053a1bf8.jpg", desc: "Korean seaweed rice rolls packed with colorful, seasoned fillings. Perfect for picnics.", ingredients: ["Roasted seaweed (Gim)", "Short-grain rice (seasoned with sesame oil)", "Pickled radish (Danmuji)", "Spinach & carrots", "Egg strips & spam/beef"], instructions: ["Lay seaweed flat. Spread a thin, even layer of sesame-seasoned rice.", "Arrange spinach, egg, pickles, carrots, and meat in a line.", "Roll tightly using a bamboo mat, brush with sesame oil, and slice."] },

  // china
  { 
    id: 71, title: "Mapo Tofu", author: "Nai Nai Lin", cuisine: "China", category: "Dinner", time: "30 Mins", 
    image: "https://assets.epicurious.com/photos/624b45cc1184c47f7e94b17e/3:2/w_6948,h_4632,c_limit/MapoTofu_RECIPE_033122_31225.jpg", 
    desc: "Silken tofu set in a spicy, brilliant red, numbingly hot Sichuan peppercorn sauce.",
    ingredients: ["Soft tofu", "Ground pork", "Doubanjiang (Spicy bean paste)", "Sichuan peppercorns", "Garlic & ginger"],
    instructions: ["Toast and grind Sichuan peppercorns.", "Fry pork until crispy. Add doubanjiang, garlic, and ginger until oil turns red.", "Add chicken broth and gently slide in cubed tofu. Thicken with cornstarch and dust with peppercorn powder."]
  },
  { id: 72, title: "Kung Pao Chicken", author: "Auntie Mei", cuisine: "China", category: "Chicken", time: "25 Mins", image: "https://www.onceuponachef.com/images/2018/05/Kung-Pao-Chicken-16-760x938.jpg", desc: "A classic Sichuan stir-fry with tender chicken, roasted peanuts, and dried chilies in a sweet-tart sauce.", ingredients: ["Chicken breast (cubed)", "Roasted peanuts", "Dried red chilies", "Sichuan peppercorns", "Black vinegar & soy sauce"], instructions: ["Marinate chicken in soy sauce and cornstarch.", "Fry chilies and peppercorns in oil. Add chicken and stir-fry.", "Pour in sweet-tart sauce (vinegar, sugar, soy), toss in peanuts, and serve."] },
  { id: 73, title: "Char Siu (BBQ Pork)", author: "Nai Nai Lin", cuisine: "China", category: "Dinner", time: "24 Hours", image: "https://curatedkitchenware.com/cdn/shop/articles/20241120144335-how-to-make-chinese-cantonese-bbq-roasted-pork-char-siu-recipe.png?v=1758857743", desc: "Cantonese roasted pork shoulder with a sticky, glossy, sweet, and savory red glaze.", ingredients: ["Pork shoulder strips", "Hoisin sauce", "Five-spice powder", "Honey & soy sauce", "Red fermented bean curd"], instructions: ["Marinate pork overnight in hoisin, five-spice, bean curd, and soy.", "Roast hanging in the oven at 400°F.", "Brush heavily with honey every 10 minutes until a dark, sticky crust forms."] },
  { id: 74, title: "Congee (Jook)", author: "Auntie Mei", cuisine: "China", category: "Breakfast", time: "1.5 Hours", image: "https://static01.nyt.com/images/2017/01/24/dining/24COOKING-JOOK2/24COOKING-JOOK2-blog480.jpg", desc: "A deeply comforting, thick rice porridge simmered with ginger and served with savory toppings.", ingredients: ["Jasmine rice", "Chicken or pork broth", "Ginger (julienned)", "Scallions", "Century egg or shredded pork"], instructions: ["Wash rice and freeze it overnight (secret for fast breakdown).", "Boil rice in 10 parts broth to 1 part rice with ginger slices.", "Simmer until it becomes a thick porridge. Top with scallions and century egg."] },
  { id: 75, title: "Har Gow (Shrimp Dumplings)", author: "Nai Nai Lin", cuisine: "China", category: "Snack", time: "1 Hour", image: "https://chefkatiechin.com/wp-content/uploads/2017/04/IMG_0407-1024x683.jpg", desc: "The king of Dim Sum: plump shrimp encased in a translucent, pleated tapioca-wheat wrapper.", ingredients: ["Wheat starch & tapioca flour", "Shrimp (chopped)", "Bamboo shoots", "Sesame oil & white pepper", "Boiling water"], instructions: ["Pour boiling water into starches to form a dough. Knead until smooth.", "Mix shrimp with bamboo shoots and seasoning.", "Roll wrappers paper-thin, pleat around the filling, and steam in a bamboo basket for 6 minutes."] },
  { id: 76, title: "Dan Dan Noodles", author: "Auntie Mei", cuisine: "China", category: "Lunch", time: "25 Mins", image: "https://www.halfbakedharvest.com/wp-content/uploads/2019/10/Better-Than-Takeout-Dan-Dan-Noodles-1.jpg", desc: "Fresh noodles coated in a savory, spicy sesame-chili sauce and topped with crispy pork.", ingredients: ["Fresh wheat noodles", "Ground pork", "Sui Mi Ya Cai (preserved mustard greens)", "Sesame paste & chili oil", "Sichuan peppercorn powder"], instructions: ["Crisp ground pork with preserved greens and soy sauce.", "In a bowl, mix sesame paste, soy sauce, black vinegar, and chili oil.", "Boil noodles, place in the bowl, top with pork, and mix vigorously to eat."] },
  { id: 77, title: "Tomato Egg Stir-Fry", author: "Nai Nai Lin", cuisine: "China", category: "Breakfast", time: "10 Mins", image: "https://jhsnzyqggpslvlbzypef.supabase.co/storage/v1/object/public/recipe-images/chinese-tomato-and-egg-stir-fry.png", desc: "The ultimate Chinese comfort food. Fluffy scrambled eggs folded into sweet, juicy tomatoes.", ingredients: ["Tomatoes (cut into wedges)", "Eggs", "Scallions", "Sugar", "Salt"], instructions: ["Scramble eggs gently in hot oil and remove from pan.", "Sauté tomatoes until they break down into a saucy consistency. Add sugar.", "Return eggs to the pan to absorb the juices. Garnish with scallions."] },
  { id: 78, title: "Hot and Sour Soup", author: "Auntie Mei", cuisine: "China", category: "Healthy", time: "30 Mins", image: "https://littlespoonfarm.com/wp-content/uploads/2021/10/Hot-and-sour-soup-recipe.jpg", desc: "A warming, thick soup loaded with wood ear mushrooms, tofu, bamboo shoots, and a white pepper kick.", ingredients: ["Chicken broth", "Wood ear mushrooms", "Bamboo shoots", "Black vinegar & white pepper", "Cornstarch & egg"], instructions: ["Simmer broth with mushrooms, bamboo, and tofu.", "Add generous amounts of black vinegar for sour and white pepper for heat.", "Thicken with cornstarch slurry, then stream in a beaten egg to form ribbons."] },
  { id: 79, title: "Beef Chow Fun", author: "Nai Nai Lin", cuisine: "China", category: "Beef", time: "25 Mins", image: "https://tornadoughalli.com/wp-content/uploads/2023/11/BEEF-CHOW-FUN3-1.jpg", desc: "Wide, chewy rice noodles stir-fried with tender beef and bean sprouts, infused with 'wok hei'.", ingredients: ["Fresh wide rice noodles (Ho Fun)", "Flank steak (sliced)", "Bean sprouts & scallions", "Dark & light soy sauce", "Oyster sauce"], instructions: ["Velvet the beef with baking soda and soy sauce, then sear quickly.", "Gently separate noodles and stir fry in a smoking hot wok.", "Toss everything together with dark soy sauce and sprouts. Do not break the noodles!"] },
  { id: 80, title: "Peking Duck", author: "Auntie Mei", cuisine: "China", category: "Dinner", time: "48 Hours", image: "https://static01.nyt.com/images/2019/01/28/dining/kc-peking-duck/kc-peking-duck-threeByTwoLargeAt2X-v2.jpg", desc: "A legendary imperial dish. Duck with impossibly crisp, glass-like skin, served with thin pancakes.", ingredients: ["Whole duck", "Maltose syrup", "Hoisin sauce", "Cucumber & Scallion", "Mandarin pancakes"], instructions: ["Separate duck skin from meat using an air pump, then scald with boiling water.", "Glaze with maltose and hang to dry in front of a fan for 24 hours.", "Roast vertically. Slice skin and meat, serve rolled in pancakes with hoisin and scallion."] },

  // india
  { 
    id: 81, title: "Chicken Tikka Masala", author: "Dadi Sunita", cuisine: "India", category: "Chicken", time: "1.5 Hours", 
    image: "https://bellyfull.net/wp-content/uploads/2021/05/Chicken-Tikka-Masala-blog.jpg", 
    desc: "Charred, yogurt-marinated chicken chunks swimming in a velvety, spiced tomato-cream sauce.",
    ingredients: ["Chicken thighs", "Yogurt & Garam Masala", "Tomato puree", "Heavy cream", "Kasuri Methi (dried fenugreek)"],
    instructions: ["Marinate chicken in yogurt and spices, then char under a broiler.", "Sauté onions, ginger, and garlic. Add tomato puree and spices.", "Simmer until oil separates. Stir in cream, fenugreek, and charred chicken."]
  },
  { id: 82, title: "Palak Paneer", author: "Aunty Priya", cuisine: "India", category: "Healthy", time: "40 Mins", image: "https://www.whiskaffair.com/wp-content/uploads/2014/07/Palak-Paneer-2-3.jpg", desc: "Fresh spinach puree cooked with fragrant spices and studded with cubes of fresh Indian cottage cheese.", ingredients: ["Paneer cheese", "Fresh spinach", "Green chilies", "Cumin & Garam Masala", "A splash of cream"], instructions: ["Blanch spinach and blend into a smooth green puree.", "Fry paneer cubes lightly in ghee.", "Temper cumin in hot oil, add spinach, spices, and paneer. Simmer for 5 minutes."] },
  { id: 83, title: "Chole Bhature", author: "Dadi Sunita", cuisine: "India", category: "Lunch", time: "2 Hours", image: "https://holycowvegan.net/wp-content/uploads/2025/11/chole-bhature-4.jpg", desc: "A fiery Punjabi chickpea curry served with balloon-like, deep-fried fermented breads.", ingredients: ["Chickpeas (soaked)", "Amchoor (mango powder) & Chole masala", "Black tea bags (for color)", "Maida (flour for Bhature)", "Yogurt"], instructions: ["Pressure cook chickpeas with tea bags until dark and tender.", "Simmer in a thick, spicy, tangy onion-tomato gravy.", "Knead flour with yogurt, let ferment, roll into disks, and deep fry until puffed."] },
  { id: 84, title: "Samosa", author: "Aunty Priya", cuisine: "India", category: "Snack", time: "1 Hour", image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg", desc: "The iconic triangular pastry, fried until blistered and crisp, hiding a spiced potato and pea filling.", ingredients: ["All-purpose flour & Ajwain seeds", "Potatoes (boiled)", "Green peas", "Coriander & Cumin seeds", "Ghee"], instructions: ["Rub ghee into flour and knead a stiff dough. Rest.", "Mash potatoes and sauté with peas and crushed whole spices.", "Roll dough into cones, stuff, seal, and fry slowly on low heat for a blistered crust."] },
  { id: 85, title: "Masala Dosa", author: "Dadi Sunita", cuisine: "India", category: "Breakfast", time: "24 Hours", image: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg", desc: "A massive, paper-thin, crispy fermented rice and lentil crepe, stuffed with spiced mustard-seed potatoes.", ingredients: ["Rice & Urad Dal (lentils)", "Potatoes", "Mustard seeds & curry leaves", "Turmeric", "Coconut chutney (for serving)"], instructions: ["Soak rice and dal, blend, and let ferment overnight until bubbly.", "Spread thin on a hot tawa (griddle).", "Place yellow tempered potatoes inside, fold, and serve crispy."] },
  { id: 86, title: "Mutton Rogan Josh", author: "Aunty Priya", cuisine: "India", category: "Dinner", time: "2.5 Hours", image: "https://static.toiimg.com/thumb/53192600.cms?width=800&height=800&imgsize=418831", desc: "A deep red, aromatic Kashmiri curry made with tender chunks of lamb braised in yogurt and fennel.", ingredients: ["Lamb or Mutton chunks", "Kashmiri red chili powder", "Fennel powder", "Yogurt", "Whole spices (cardamom, cloves)"], instructions: ["Brown the meat in mustard oil with whole spices.", "Whisk yogurt with fennel and chili powder to prevent curdling.", "Add yogurt to meat and slow braise until meltingly tender and oil floats to the top."] },
  { id: 87, title: "Aloo Gobi", author: "Dadi Sunita", cuisine: "India", category: "Healthy", time: "30 Mins", image: "https://static01.nyt.com/images/2023/12/21/multimedia/ND-Aloo-Gobi-gkwc/ND-Aloo-Gobi-gkwc-threeByTwoLargeAt2X.jpg", desc: "A dry, spiced vegetarian stir-fry of cauliflower florets and potatoes coated in turmeric.", ingredients: ["Cauliflower", "Potatoes", "Turmeric & Coriander powder", "Ginger", "Fresh cilantro"], instructions: ["Fry potatoes and cauliflower until golden edges appear.", "Remove, temper ginger and spices in oil, then return vegetables.", "Cover and steam in their own juices until tender."] },
  { id: 88, title: "Kanda Poha", author: "Aunty Priya", cuisine: "India", category: "Breakfast", time: "15 Mins", image: "https://www.funfoodfrolic.com/wp-content/uploads/2024/04/Kanda-Poha-Blog.jpg", desc: "A light, fluffy breakfast made from flattened rice, peanuts, turmeric, and fresh lemon.", ingredients: ["Poha (flattened rice)", "Peanuts", "Onions", "Mustard seeds & green chilies", "Lemon juice"], instructions: ["Wash poha quickly in a colander so it softens but doesn't turn to mush.", "Fry peanuts, temper mustard seeds and chilies, and sauté onions.", "Toss in the poha, cover to steam for 2 minutes, and finish with lemon and cilantro."] },
  { id: 89, title: "Dal Makhani", author: "Dadi Sunita", cuisine: "India", category: "Dinner", time: "12 Hours", image: "https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog.jpg", desc: "Whole black lentils slow-cooked overnight on a charcoal fire, finished with copious amounts of butter.", ingredients: ["Whole black urad dal", "Kidney beans (rajma)", "Butter (Makhan)", "Tomato puree", "Cream"], instructions: ["Boil soaked dal until completely broken down and creamy.", "In a pan, sauté ginger-garlic paste and tomato puree. Add to dal.", "Simmer on low for hours, finishing with large chunks of butter and a splash of cream."] },
  { id: 90, title: "Gulab Jamun", author: "Aunty Priya", cuisine: "India", category: "Desserts", time: "45 Mins", image: "https://pipingpotcurry.com/wp-content/uploads/2023/12/Gulab-Jamun-Recipe-Piping-Pot-Curry.jpg", desc: "Deep-fried, milk-solid dough balls soaked in a warm, sticky, cardamom and rose-water syrup.", ingredients: ["Khoya (milk solids) or milk powder", "Flour", "Sugar", "Rose water & Cardamom", "Ghee for frying"], instructions: ["Knead khoya and flour into a soft, crack-free dough. Roll into small balls.", "Fry very slowly in ghee until dark golden brown.", "Drop hot fried balls directly into warm rose-cardamom sugar syrup and let soak."] },

  // thailand
  { 
    id: 91, title: "Pad Thai", author: "Yai Nook", cuisine: "Thailand", category: "Lunch", time: "25 Mins", 
    image: "https://www.recipetineats.com/tachyon/2020/01/Chicken-Pad-Thai_9-SQ.jpg", 
    desc: "Chewy rice noodles wok-tossed in a sweet, sour, and salty tamarind sauce with shrimp and crushed peanuts.",
    ingredients: ["Rice noodles", "Tamarind paste", "Palm sugar & fish sauce", "Eggs & Shrimp", "Bean sprouts & Peanuts"],
    instructions: ["Soak noodles in warm water. Mix tamarind, sugar, and fish sauce.", "Scramble eggs in a hot wok. Add shrimp and noodles.", "Pour in the sauce, tossing vigorously until absorbed. Garnish with peanuts and lime."]
  },
  { id: 92, title: "Tom Yum Goong", author: "Auntie Noi", cuisine: "Thailand", category: "Healthy", time: "20 Mins", image: "https://lionbrand.com.au/wp-content/uploads/2022/07/Tom-Yum-Goong-Recipe1.jpg", desc: "A furiously hot, sour, and aromatic soup loaded with shrimp, lemongrass, and makrut lime leaves.", ingredients: ["Jumbo shrimp (with heads)", "Lemongrass (smashed)", "Galangal & Makrut lime leaves", "Bird's eye chilies", "Lime juice & fish sauce"], instructions: ["Boil shrimp heads to make stock, then discard heads.", "Add smashed lemongrass, galangal, and lime leaves to the broth.", "Add shrimp and mushrooms. Turn off heat, then season heavily with lime juice and chilies."] },
  { id: 93, title: "Gaeng Keow Wan (Green Curry)", author: "Yai Nook", cuisine: "Thailand", category: "Chicken", time: "40 Mins", image: "https://www.cookingwithnart.com/wp-content/uploads/2021/07/Thai-Green-Beef-Curry-with-Eggplant.jpg", desc: "A vibrant, sweet and spicy green coconut curry with tender chicken and Thai eggplants.", ingredients: ["Green curry paste", "Coconut milk", "Chicken breast", "Thai eggplants", "Sweet basil"], instructions: ["Fry curry paste in a little coconut cream until oil separates.", "Add chicken and cook until opaque.", "Pour in remaining coconut milk, add eggplants, and simmer. Finish with sweet basil."] },
  { id: 94, title: "Massaman Curry", author: "Auntie Noi", cuisine: "Thailand", category: "Dinner", time: "2 Hours", image: "https://www.feastingathome.com/wp-content/uploads/2024/10/massaman-curry-recipe-9.jpg", desc: "A rich, mild, Persian-influenced curry with slow-cooked beef, potatoes, and roasted peanuts.", ingredients: ["Massaman curry paste", "Beef chuck chunks", "Coconut milk", "Potatoes & onions", "Roasted peanuts"], instructions: ["Braise beef in dilute coconut milk for 1.5 hours until tender.", "Fry the curry paste, add the thick coconut cream, and combine with the beef.", "Add potatoes, onions, and peanuts, simmering until potatoes are soft."] },
  { id: 95, title: "Som Tum (Papaya Salad)", author: "Yai Nook", cuisine: "Thailand", category: "Healthy", time: "15 Mins", image: "https://assets.bonappetit.com/photos/644819df047251c7e5ee250b/1:1/w_3665,h_3665,c_limit/042523-green-papaya-salad-lede.jpg", desc: "A fiercely spicy, tart, and crunchy salad pounded in a mortar and pestle.", ingredients: ["Shredded green papaya", "Garlic & bird's eye chilies", "Cherry tomatoes", "Fish sauce & lime juice", "Dried shrimp & peanuts"], instructions: ["Pound garlic and chilies in a mortar. Add palm sugar.", "Lightly bruise tomatoes and long beans in the mortar.", "Add shredded papaya, fish sauce, lime, and peanuts. Toss and pound lightly to mix."] },
  { id: 96, title: "Khao Niao Mamuang (Mango Sticky Rice)", author: "Auntie Noi", cuisine: "Thailand", category: "Desserts", time: "45 Mins", image: "https://hot-thai-kitchen.com/wp-content/uploads/2014/02/rainbow-mango-sticky-rice-sq.jpg", desc: "Sweet, rich, coconut-soaked glutinous rice served alongside a perfectly ripe mango.", ingredients: ["Glutinous sticky rice", "Coconut milk", "Palm sugar", "Salt", "Ripe Nam Dok Mai mangoes"], instructions: ["Soak rice overnight, then steam in a bamboo basket for 25 mins.", "Heat coconut milk, sugar, and salt until dissolved.", "Pour hot coconut mixture over the hot rice. Let it absorb. Serve with sliced mango."] },
  { id: 97, title: "Pad Krapow Moo Saap", author: "Yai Nook", cuisine: "Thailand", category: "Dinner", time: "15 Mins", image: "https://makethatdish.com/wp-content/uploads/2021/01/Pad-Kra-Pao-5.jpg", desc: "The ultimate Thai street food: minced pork fiery stir-fried with holy basil, served under a crispy fried egg.", ingredients: ["Minced pork", "Holy Basil (Krapow)", "Garlic & bird's eye chilies", "Dark & light soy sauce", "Egg"], instructions: ["Pound garlic and chilies into a paste. Fry in hot oil until coughing ensues.", "Toss in minced pork and cook until no longer pink.", "Add soy sauces, turn off heat, and toss in a massive handful of holy basil. Top with fried egg."] },
  { id: 98, title: "Khao Pad (Thai Fried Rice)", author: "Auntie Noi", cuisine: "Thailand", category: "Lunch", time: "15 Mins", image: "https://hungryinthailand.com/wp-content/uploads/2025/02/chicken-thai-fried-rice.webp", desc: "Simple, savory fried rice with a hint of white pepper, egg, and a squeeze of lime.", ingredients: ["Day-old jasmine rice", "Egg", "Garlic & scallions", "Soy sauce & fish sauce", "Lime & cucumber"], instructions: ["Scramble an egg in a hot wok and push aside.", "Sauté garlic, add the cold rice, and break up clumps.", "Season with soy and fish sauce, toss with egg and scallions. Serve with lime wedges."] },
  { id: 99, title: "Jok (Rice Porridge)", author: "Yai Nook", cuisine: "Thailand", category: "Breakfast", time: "40 Mins", image: "https://fearlesseating.net/wp-content/uploads/2018/01/for-book-thai-congee-joke-1024x683.jpg", desc: "A deeply comforting breakfast porridge made from broken rice, served with pork meatballs and a soft egg.", ingredients: ["Broken jasmine rice", "Pork broth", "Minced pork (seasoned)", "Soft boiled egg", "Ginger & scallions"], instructions: ["Boil broken rice in broth until it completely disintegrates into a thick soup.", "Drop seasoned pork meatballs into the boiling porridge to cook.", "Serve in a bowl topped with a soft egg, slivered ginger, and white pepper."] },
  { id: 100, title: "Tod Mun Pla (Fish Cakes)", author: "Auntie Noi", cuisine: "Thailand", category: "Snack", time: "25 Mins", image: "https://thaicaliente.com/wp-content/uploads/2021/10/Fish-Cake-Feature.jpg", desc: "Spongy, spicy, red curry-infused fish cakes dotted with finely sliced lime leaves.", ingredients: ["White fish paste", "Red curry paste", "Makrut lime leaves (chiffonade)", "Long beans (sliced thin)", "Sweet chili cucumber sauce"], instructions: ["Knead the fish paste vigorously with curry paste until sticky and bouncy.", "Fold in the lime leaves and beans.", "Form into small patties and fry until golden. Serve with sweet chili cucumber relish."] },

  // mexico
  { 
    id: 101, title: "Chilaquiles Verdes", author: "Abuela Sofia", cuisine: "Mexico", category: "Breakfast", time: "20 Mins", 
    image: "https://patijinich.com/wp-content/uploads/2012/10/04_GreenChilaquilesRoastedTomatilloSauce_101_Cropped-copy.jpg", 
    desc: "Crispy homemade tortilla chips smothered in a tangy, spicy tomatillo salsa and topped with crema.",
    ingredients: ["Corn tortillas (cut and fried)", "Tomatillos & Jalapeños", "Cilantro & onion", "Crema Mexicana", "Queso Fresco & Fried Egg"],
    instructions: ["Boil tomatillos and jalapeños, then blend with cilantro and onion to make salsa.", "Simmer the salsa in a pan. Toss in the crispy tortilla chips to coat.", "Serve immediately before they get soggy. Top with crema, cheese, and an egg."]
  },
  { id: 102, title: "Pozole Rojo", author: "Abuela Elena", cuisine: "Mexico", category: "Healthy", time: "3 Hours", image: "https://www.isabeleats.com/wp-content/uploads/2025/09/chicken-pozole-small-5.jpg", desc: "A deeply nourishing, rich pork and hominy stew flavored with dried red chilies and topped with fresh radishes.", ingredients: ["Pork shoulder & trotters", "Canned hominy", "Dried Guajillo & Ancho chilies", "Garlic", "Cabbage, radishes, lime (for garnish)"], instructions: ["Simmer pork and hominy with garlic for 2 hours until tender.", "Blend soaked dried chilies with garlic and strain into the stew.", "Simmer for another 30 minutes. Serve with shredded cabbage, radishes, and lime."] },
  { id: 103, title: "Tacos al Pastor", author: "Abuela Sofia", cuisine: "Mexico", category: "Lunch", time: "4 Hours", image: "https://therealfooddietitians.com/wp-content/uploads/2025/08/Crockpot-Al-Pastor-12.jpg", desc: "Thinly sliced pork marinated in achiote and chilies, traditionally roasted on a spit with pineapple.", ingredients: ["Pork shoulder (thinly sliced)", "Achiote paste", "Guajillo chilies & pineapple juice", "Fresh pineapple", "Corn tortillas & cilantro"], instructions: ["Blend achiote, chilies, and pineapple juice. Marinate pork for 3 hours.", "Skewer meat with pineapple and roast (or sear in a smoking hot pan).", "Slice thinly into tortillas, top with roasted pineapple, onion, and cilantro."] },
  { id: 104, title: "Mole Poblano", author: "Abuela Elena", cuisine: "Mexico", category: "Chicken", time: "4 Hours", image: "https://cinnamonsnail.com/wp-content/uploads/2026/01/mole_poblano-04.jpg", desc: "A complex, majestic dark sauce made of 20+ ingredients including chilies, nuts, spices, and chocolate.", ingredients: ["Whole chicken", "Mulato, Pasilla & Ancho chilies", "Almonds, pecans, sesame seeds", "Cinnamon & cloves", "Mexican chocolate"], instructions: ["Boil chicken to make broth. Toast chilies, nuts, and spices separately.", "Blend everything with broth into a smooth paste. Fry the paste in hot oil.", "Add chocolate and simmer for hours. Pour over the boiled chicken and sprinkle with sesame seeds."] },
  { id: 105, title: "Enchiladas Suizas", author: "Abuela Sofia", cuisine: "Mexico", category: "Dinner", time: "45 Mins", image: "https://www.tasteofhome.com/wp-content/uploads/2025/09/Enchiladas-Suizas_EXPS_TOHVP25_279774_MF_08_12_1.jpg", desc: "Creamy, mild, and cheesy. Chicken enchiladas baked in a tomatillo-cream sauce and bubbling Chihuahua cheese.", ingredients: ["Shredded cooked chicken", "Corn tortillas", "Tomatillos & poblano peppers", "Crema or heavy cream", "Chihuahua or Oaxaca cheese"], instructions: ["Blend boiled tomatillos and poblanos with cream to make the 'Swiss' sauce.", "Roll chicken in tortillas and arrange in a baking dish.", "Drench in the cream sauce, cover with a blanket of cheese, and bake until golden."] },
  { id: 106, title: "Tamales de Rojo", author: "Abuela Elena", cuisine: "Mexico", category: "Dinner", time: "4 Hours", image: "https://keviniscooking.com/wp-content/uploads/2023/08/Pork-Tamales-Rojos-sauce.jpg", desc: "Soft, fluffy masa dough wrapped in corn husks, hiding a center of slow-cooked red chile pork.", ingredients: ["Masa harina", "Lard or shortening", "Pork shoulder", "Red chile sauce (Guajillo)", "Dried corn husks"], instructions: ["Soak corn husks in hot water. Whip lard, masa, and broth until a fluffy dough forms.", "Spread masa on a husk, add a spoonful of red chile pork, and fold to seal.", "Stand tamales upright in a steamer and steam for 1.5 to 2 hours until firm."] },
  { id: 107, title: "Elote (Street Corn)", author: "Abuela Sofia", cuisine: "Mexico", category: "Snack", time: "15 Mins", image: "https://thenoshery.com/wp-content/uploads/2017/06/Elote-Corn-3.jpg", desc: "Charred corn on the cob slathered in mayonnaise, cotija cheese, chili powder, and lime.", ingredients: ["Ears of corn", "Mayonnaise", "Cotija cheese (crumbled)", "Chili powder (Tajín)", "Lime wedges"], instructions: ["Grill corn directly over an open flame until evenly charred.", "Brush heavily with mayonnaise.", "Roll the corn in crumbled Cotija cheese, dust with chili powder, and squeeze lime over it."] },
  { id: 108, title: "Huevos Rancheros", author: "Abuela Elena", cuisine: "Mexico", category: "Breakfast", time: "15 Mins", image: "https://cdn.loveandlemons.com/wp-content/uploads/2024/05/huevos-rancheros.jpg", desc: "A hearty rancher's breakfast: fried eggs served on lightly crisped tortillas with warm salsa ranchera.", ingredients: ["Corn tortillas", "Eggs", "Salsa ranchera (tomato, jalapeño, onion)", "Refried beans", "Avocado"], instructions: ["Lightly fry tortillas until slightly crisp but pliable. Spread warm refried beans on top.", "Fry eggs sunny-side up and place on the tortillas.", "Smother the eggs in hot salsa ranchera and serve with avocado slices."] },
  { id: 109, title: "Carne Asada", author: "Abuela Sofia", cuisine: "Mexico", category: "Beef", time: "1 Hour", image: "https://www.simplyrecipes.com/thmb/BFZCXxtSY4wiVrTVBC2IgWSK-rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Carne-Asada-LEAD-4-5d71826881464bdfaed032d673cd8b1f.jpg", desc: "Thinly sliced skirt steak marinated in citrus and beer, grilled over a blazing hot charcoal fire.", ingredients: ["Skirt or flank steak", "Orange & lime juice", "Mexican lager beer", "Garlic & jalapeño", "Cilantro"], instructions: ["Marinate the steak in citrus, beer, garlic, and cilantro for at least 1 hour.", "Heat a charcoal grill to the highest possible heat.", "Sear the meat for 3-4 minutes per side until charred. Slice against the grain for tacos."] },
  { id: 110, title: "Pastel de Tres Leches", author: "Abuela Elena", cuisine: "Mexico", category: "Desserts", time: "4 Hours", image: "https://www.allrecipes.com/thmb/Cb0wYk4WlCtmxOIav1ZJuB9d5cE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/221907-Pastel-de-Tres-Leches_Melissa-Goff_5014610_original-4x3-1-1381d72b98a64f9b814e16e41575435a.jpg", desc: "A phenomenally moist vanilla sponge cake soaked in three kinds of milk, topped with whipped cream.", ingredients: ["Vanilla sponge cake (baked)", "Evaporated milk", "Sweetened condensed milk", "Heavy cream", "Fresh strawberries"], instructions: ["Bake a light, airy sponge cake and let it cool. Poke holes all over it with a fork.", "Whisk the three milks together and slowly pour over the cake until fully absorbed.", "Chill for 3 hours, then frost with freshly whipped cream and berries."] }
  // society (front display)
  ,{ 
    id: 111, title: "Garlic Butter Shrimp in White Wine Sauce", author: "Society Archives", cuisine: "Italian", category: "Dinner", time: "20 Mins", 
    image: "https://images.unsplash.com/photo-1661879425941-ee92d9fe8998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", 
    desc: "A classic from the society archives. Tender, perfectly seared shrimp bathed in a lemon, garlic, and white wine reduction.", 
    ingredients: ["Jumbo shrimp (peeled & deveined)", "Unsalted butter", "Dry white wine (Pinot Grigio)", "Fresh garlic (minced)", "Lemon juice & fresh parsley"], 
    instructions: ["Season the shrimp with salt and pepper. Sear in a hot skillet with a touch of oil for 1 minute per side until just pink, then remove.", "In the same skillet, melt the butter and sauté minced garlic until fragrant (about 30 seconds).", "Pour in the white wine and lemon juice, scraping up any browned bits. Simmer until the sauce is reduced by half.", "Return the shrimp to the pan, toss to coat in the glossy butter sauce, and garnish generously with fresh parsley."] 
  }
  ];

 //usual recipe card display
  const createCardHTML = (recipe) => `
  <div class="recipe-card" onclick="openRecipe(${recipe.id})">
    <div class="recipe-img-wrapper">
      <span class="recipe-badge">${recipe.cuisine}</span>
      <img src="${recipe.image}" alt="${recipe.title}">
    </div>
    <div class="recipe-content">
      <h3 class="recipe-title">${recipe.title}</h3>
      <p class="recipe-meta">${recipe.time} • ${recipe.author}</p>
    </div>
  </div>
`;

// grid containers
const gridLatest = document.getElementById('grid-latest');
const gridVietnamese = document.getElementById('grid-vietnamese');
const gridCultural = document.getElementById('grid-cultural');
// subpage grids
const gridHealthy = document.getElementById('grid-healthy');
const gridSpring = document.getElementById('grid-spring');

// editorial card for the subpages
const createEditorialCard = (recipe, index) => `
  <div class="editorial-card" onclick="openRecipe(${recipe.id})">
    <div class="editorial-img-wrapper">
      <div class="editorial-number">${index + 1}</div>
      <img src="${recipe.image}" alt="${recipe.title}">
    </div>
    <div class="editorial-content">
      <div class="editorial-meta">
        <span class="editorial-cuisine">${recipe.cuisine}</span>
        <span class="editorial-dot">•</span>
        <span class="editorial-author">${recipe.author}</span>
      </div>
      <h2 class="editorial-card-title">${recipe.title}</h2>
      <p class="editorial-card-desc">${recipe.desc}</p>
      <span class="editorial-btn">Get the Recipe</span>
    </div>
  </div>
  <div class="editorial-divider"></div>
`;

// healthy page cards
if (gridHealthy) {
  const healthyRecipeIDs = [95, 7, 18, 23, 27, 43, 55, 61, 69, 78, 82, 87];
  const healthyRecipes = healthyRecipeIDs.map(id => recipeDatabase.find(r => r.id === id));
  gridHealthy.innerHTML = healthyRecipes.map((recipe, index) => createEditorialCard(recipe, index)).join('');
}

// spring page cards
if (gridSpring) {
  const springRecipeIDs = [
    2, 7, 14, 20, 23, 27, 30, 38, 46, 49, 55, 58, 61, 65, 77, 82, 87, 91, 95, 107, 110
  ];
  const springRecipes = springRecipeIDs.map(id => recipeDatabase.find(r => r.id === id));
  gridSpring.innerHTML = springRecipes.map((recipe, index) => createEditorialCard(recipe, index)).join('');
}

// spiring page cards 
if (gridSpring) {
  const springRecipeIDs = [2, 7, 14, 20, 23, 27, 30, 38, 46, 49, 55, 58, 61, 65, 77, 82, 87, 91, 95, 107, 110];
  
  // find recipes to IDs
  const springRecipes = springRecipeIDs.map(id => recipeDatabase.find(r => r.id === id));
  
  gridSpring.innerHTML = springRecipes.map((recipe, index) => createVerticalCardHTML(recipe, index)).join('');
}



// randomize logic for front catalogs
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// helper function --> gets random recipes with unique cuisines
const getUniqueCuisineRecipes = (pool, count) => {
  const selected = [];
  const seenCuisines = new Set();
  const remainingPool = [];

  for (const recipe of pool) {
    // checks uniqueness of cuisine
    if (selected.length < count && !seenCuisines.has(recipe.cuisine)) {
      selected.push(recipe);
      seenCuisines.add(recipe.cuisine);
    } else {
      // keeps unselected pool of recipes for next grid
      remainingPool.push(recipe);
    }
  }
  return { selected, remainingPool };
};

// shuffle database
let availableRecipesPool = shuffleArray(recipeDatabase);

// populates the latest grid w/ 4 cards
if (gridLatest) {
  const latestData = getUniqueCuisineRecipes(availableRecipesPool, 4);
  gridLatest.innerHTML = latestData.selected.map(createCardHTML).join('');
  
  // updates 'Delicious Cultural Dishes' to prevent reuse of any cards for future
  availableRecipesPool = latestData.remainingPool; 
}

// populate vietnamese grid
if (gridVietnamese) {
  // from direct database
  const vietRecipes = recipeDatabase.filter(r => r.cuisine === 'Vietnamese').slice(0, 4);
  gridVietnamese.innerHTML = vietRecipes.map(createCardHTML).join('');
}

// populate Cultural Grid 
if (gridCultural) {
  const culturalData = getUniqueCuisineRecipes(availableRecipesPool, 4);
  gridCultural.innerHTML = culturalData.selected.map(createCardHTML).join('');
}

// 6. handles the card opening and closing
const recipeModal = document.getElementById('recipe-modal');
const closeRecipeBtn = document.getElementById('close-recipe-btn');

if (closeRecipeBtn && recipeModal) {
  closeRecipeBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    recipeModal.classList.add('hidden');
    document.body.style.overflow = 'auto'; 
  });
}

window.openRecipe = (id) => {
  const recipe = recipeDatabase.find(r => r.id === id);
  if (!recipe) return;

  document.getElementById('modal-img').src = recipe.image;
  document.getElementById('modal-cuisine').innerText = recipe.cuisine;
  document.getElementById('modal-title').innerText = recipe.title;
  document.getElementById('modal-time').innerText = recipe.time;
  document.getElementById('modal-author').innerText = recipe.author;
  document.getElementById('modal-desc').innerText = recipe.desc;

  const ingredientsList = document.getElementById('modal-ingredients');
  ingredientsList.innerHTML = '';
  recipe.ingredients.forEach(ing => {
    const li = document.createElement('li');
    li.innerText = ing;
    ingredientsList.appendChild(li);
  });

  const instructionsList = document.getElementById('modal-instructions');
  instructionsList.innerHTML = '';
  recipe.instructions.forEach(inst => {
    const li = document.createElement('li');
    li.innerText = inst;
    instructionsList.appendChild(li);
  });

  recipeModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; 
};

// search and filter dropdown logic
const searchBtn = document.querySelector('.search-btn'); 
const searchModal = document.getElementById('search-modal');
const closeSearchBtn = document.getElementById('close-search-btn');
const searchInput = document.getElementById('search-input');

// grabs all the dropdown filters
const filterCuisine = document.getElementById('filter-cuisine');
const filterCourse = document.getElementById('filter-course');
const filterTime = document.getElementById('filter-time');
const filterDiet = document.getElementById('filter-diet');
const searchResults = document.getElementById('search-results');

const renderResults = () => {
  if (!searchInput || !searchResults) return;

  const query = searchInput.value.toLowerCase().trim();
  const selectedCuisine = filterCuisine ? filterCuisine.value : 'All';
  const selectedCourse = filterCourse ? filterCourse.value : 'All';
  const selectedTime = filterTime ? filterTime.value : 'All';
  const selectedDiet = filterDiet ? filterDiet.value : 'All';

  const filteredRecipes = recipeDatabase.filter(recipe => {
    
    // culture matching
    const matchCuisine = selectedCuisine === 'All' || recipe.cuisine === selectedCuisine;

    // course matching
    const rCourse = recipe.category || "";
    const matchCourse = selectedCourse === 'All' || rCourse.includes(selectedCourse) || selectedCourse.includes(rCourse);

    // convience matching
    let matchTime = true;
    if (selectedTime !== 'All') {
      const timeStr = (recipe.time || "").toLowerCase();
      const isHours = timeStr.includes('hour');
      const timeNum = parseInt(timeStr.replace(/\D/g, '')) || 0; // number extraction ex. 30 mins

      if (selectedTime === 'under30') {
        matchTime = !isHours && timeNum <= 30 && timeNum > 0;
      } else if (selectedTime === 'under60') {
        matchTime = !isHours && timeNum <= 60 && timeNum > 0;
      } else if (selectedTime === 'over60') {
        matchTime = isHours || timeNum >= 60;
      }
    }

    // diet matching
    let matchDiet = true;
    if (selectedDiet === 'vegetarian') {
       const meatWords = ['beef', 'chicken', 'pork', 'fish', 'shrimp', 'seafood', 'bacon'];
       const hasMeat = recipe.ingredients.some(ing => meatWords.some(meat => ing.toLowerCase().includes(meat)));
       matchDiet = !hasMeat; // vegetarian if meat not seen
    } else if (selectedDiet === 'dairy-free') {
       const dairyWords = ['milk', 'cheese', 'butter', 'cream', 'yogurt', 'parmesan'];
       const hasDairy = recipe.ingredients.some(ing => dairyWords.some(dairy => ing.toLowerCase().includes(dairy)));
       matchDiet = !hasDairy; // dairy if dairy not seen
    }

    // 5. text search match
    const matchTitle = recipe.title.toLowerCase().includes(query);
    const matchCuisineText = recipe.cuisine.toLowerCase().includes(query);
    const matchIngredients = recipe.ingredients.some(ing => ing.toLowerCase().includes(query));
    const matchText = query === '' || matchTitle || matchCuisineText || matchIngredients;

    // recipe must pass all these checks to pop up
    return matchCuisine && matchCourse && matchTime && matchDiet && matchText;
  });

  if (filteredRecipes.length > 0) {
    searchResults.innerHTML = filteredRecipes.map(createCardHTML).join('');
  } else {
    searchResults.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #6b7280; font-size: 1.2rem; margin-top: 2rem;">No recipes found matching your criteria. Try adjusting your filters!</p>';
  }
};

// open modal crad
if (searchBtn && searchModal) {
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
    searchInput.value = ''; 
    if(filterCuisine) filterCuisine.value = 'All';
    if(filterCourse) filterCourse.value = 'All';
    if(filterTime) filterTime.value = 'All';
    if(filterDiet) filterDiet.value = 'All';
    renderResults(); 
    setTimeout(() => searchInput.focus(), 100);
  });
}

// close modal card
if (closeSearchBtn && searchModal) {
  closeSearchBtn.addEventListener('click', () => {
    searchModal.classList.add('hidden');
    document.body.style.overflow = 'auto'; 
  });
}

// listeners
if (searchInput) searchInput.addEventListener('input', renderResults);
if (filterCuisine) filterCuisine.addEventListener('change', renderResults);
if (filterCourse) filterCourse.addEventListener('change', renderResults);
if (filterTime) filterTime.addEventListener('change', renderResults);
if (filterDiet) filterDiet.addEventListener('change', renderResults);

// quicklinks logic
  const quickLinks = document.querySelectorAll('.quick-link');
  
  quickLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.getAttribute('data-category'); // reads "chicken", "breakfast" etc.
      
      // open search modal
      if (searchModal) {
        searchModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
      
      // reset all filters
      if (searchInput) searchInput.value = '';
      if (filterCuisine) filterCuisine.value = 'All';
      if (filterCourse) filterCourse.value = 'All';
      if (filterTime) filterTime.value = 'All';
      if (filterDiet) filterDiet.value = 'All';
      
      // apply the specific filter based on the button clicked
      if (category === 'Chicken') {
        if (searchInput) searchInput.value = 'chicken';
      } else if (category === 'Breakfast') {
        if (filterCourse) filterCourse.value = 'Breakfast';
      } else if (category === 'Dessert') {
        if (filterCourse) filterCourse.value = 'Desserts';
      } else if (category === 'Healthy') {
        if (filterCourse) filterCourse.value = 'Healthy / Light';
      }
      
      // render results
      if (typeof renderResults === 'function') renderResults();
    });
  });

});