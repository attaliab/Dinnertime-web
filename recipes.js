class recipeController {
    constructor(){
        this.recipeArray = [];
    }


    addRecipe(dish, description, image, ingredients, instructions){
        const recipeObj = {
        dish,
        description,
        image,
        ingredients,
        instructions
    }
    this.recipeArray.push(recipeObj)
    }

    // setLocalStorage(){
    //     localStorage.setItem('recipe', JSON.stringify(this.recipeArray))
    // }
    // getLocalStorage(){
    //     let recipe = JSON.parse(localStorage.getItem('recipe'))
    //     return recipe
    // }
}


const newRecipes = new recipeController();

// Creamy Cajun Shrimp Pasta
newRecipes.addRecipe(
    'Creamy Cajun Shrimp Pasta',
    'Experience the sensational flavors of Creamy Cajun Shrimp Pasta—a perfect harmony of succulent shrimp, al dente linguine, and a creamy, tangy sauce. This dish will transport your taste buds to new heights with its spicy, savory, and citrusy notes.',
    'images/creamy-cajun-shrimp-pasta.jpg',
    ['14oz Shrimp', '2 oz Baby spinach', '1 Bell pepper', '1 white onion', '4 Garlic cloves', '2 Lemons', 'Linguine', 'Black pepper', '2 tbsp Cajun seasoning', '2 tbsp Olive oil', '1 cup Heavy cream', 'Red pepper flakes'],
    ['Get all the prep done before you start cooking. Peel and devein the shrimp, pat dry with a paper towel. Combine with 1 tablespoon Cajun seasoning, ½ tsp salt, ½ black pepper, 1 teaspoon garlic powder and 1 tablespoon oil. Set aside. Dice the bell pepper, mince the garlic and finely chop the onion.',
    'Cook linguine according package directions in a large pot of generously salted boiling water.',
    'In the meantime, heat the butter and the remaining oil in a large nonstick skillet over medium high. Place the shrimp in a single layer, sear for 1 minute. Flip and sear the other side, 1 minute. Transfer to a clean plate.',
    'Add bell pepper, onion and garlic, sauté for 5 minutes, stirring occasionally. Stir in the remaining Cajun seasoning, salt and black pepper. Scoop up 1 cup pasta cooking water. Deglaze the skillet with ½ cup cooking water, reduce the heat and simmer for 2 minutes while scraping up the brown bits on the bottom of the skillet with a wooden spoon.',
    'Pour in cream and bring to a simmer. Add spinach and stir just until it starts to wilt. Next, stir in grated Parmesan and add lemon juice.',
    'When ready, drain the pasta and toss with sauce. Add shrimp, give it a good stir and add a splash of the remaining cooking water. Taste and adjust salt. Finish off with freshly ground black pepper and red pepper flakes. Serve immediately, enjoy!']
)

// Seasme-Ginger Cucmber Soba Noodle Salad
newRecipes.addRecipe(
    'Seasme-Ginger Cucumber Soba Noodle Salad',
    'Delight in the refreshing flavors of Sesame-Ginger Cucumber Soba Noodle Salad, a vibrant blend of cool soba noodles, crisp cucumber matchsticks, sautéed spinach, and succulent shrimp. Tossed in a tantalizing sauce of honey, soy, ginger, and rice wine vinegar, this dish is finished with a sprinkle of cilantro and scallions, creating a harmonious symphony of taste and texture that will invigorate your senses.',
    'images/Soba-noodle-salad.jpg',
    ['Soba noodles', '1 large Cucumber', 'Spinach', 'Cilantro', '1 Lime', 'Scallions', '2 cloves garlic', '2 tbsp Ginger', 'Seasme Seeds', '2-3 tbsp Rice wine vinegar', '1-2 tbsp Soy sauce', '1/2 tsp Sriracha', 'Honey', 'Red pepper flakes'],
    ['Cook soba noodles according to package. Once done, rinse the soba noodles under cool running water to cool them down and stop them from cooking, or they will turn mushy.', 'Mix honey, soy sauce, ginger, rice wine vinegar, and seasme seeds and set aside.', 'Cut cucumbers into 1/4 inch x 1 1/2 inch matchsticks pieces if you don not have a julienne tool.', 'Sautee garlic in a skillet until golden, then add shrimp.', 'Lightly sautee cucumbers and spinach.', 'In a bowl, put noodles, sauteed veggies, and shrimp topped with the sauce you set aside. Add cilantro and scallions and serve.' ]
)

// One-Pot Creamed Chicken Spinach
newRecipes.addRecipe(
    'One-Pot Creamed Chicken Spinach',
    'Enjoy succulent chicken thighs seasoned with a delightful blend of Italian herbs, smoked paprika, and aromatic garlic. Sautéed to perfection, the chicken is then enveloped in a luscious sauce infused with shallots, garlic, and a splash of white wine, creating a symphony of flavors that will captivate your taste buds. The velvety richness of the sauce is further elevated with the addition of creamy heavy cream and tender wilted spinach, resulting in a culinary masterpiece that promises pure indulgence with every heavenly bite.',
    'images/one-pot-creamed.jpeg',
    ['Chicken thighs', 'Italian Seasoning or  Garlic powder, Smoked paprika,  Salt, and Pepper', 'Olive oil', 'Shallots', 'Garlic', 'White wine or Chicken broth', 'Heavy cream', 'Spinach'],
    ['Pat chicken dry. Combine herbs, garlic powder, smoked paprika, salt, and pepper together in small bowl. Rub mixture on chicken thighs.', 'Heat olive oil in a large nonstick skillet set over medium heat. Add chicken to the heated oil; cook for 6 to 7 minutes per side, or until chicken is cooked through.', 'Remove chicken thighs from the pan and set aside. Set pan back over medium heat and stir in the sliced shallots; cook for a minute, or until tender. Stir in garlic and cook for 20 seconds, or until fragrant.', 'Add chicken broth or wine; whisk in sour cream and bring mixture to a boil. Make sure to whisk so that the sour cream doesn’t curdle. Whisk in heavy cream; whisk until combined.',  'Cook and stir for 2 to 3 minutes, or until the sauce is slightly thickened. Add in the spinach and cook for a minute, or until spinach is wilted. If sauce is too thick, add a little liquid (chicken broth or wine) at a time, or until you reach desired consistency.']
)

// Sweet Potato Bhudda Bowl
newRecipes.addRecipe(
    'Sweet Potato Bhudda Bowl',
    'Treat yourself to a nourishing and flavorful Sweet Potato Buddha Bowl, brimming with wholesome ingredients that will leave you feeling satisfied and energized. Roasted sweet potato chunks, caramelized red onions, and crispy seasoned chickpeas take center stage atop a bed of fluffy quinoa and wilted kale. Finished with creamy avocado slices and a drizzle of tangy Lemon Tahini dressing, this vibrant bowl offers a delightful blend of textures and a harmonious medley of flavors that will nourish both body and soul.',
    'images/sweet-potato-vegan-buddha-bowl.jpg',
    ['1 Avocado', '1 can Chickpeas', '3/4 tsp Garlic powder',  '1 head Kale', '1 Red onion', '2 Sweet potatoes', '1 batch Lemon tahini dressing', '2 cups Quinoa', '2 tsp Paprika', '1 tsp Salt', '3 tbsp Olive oil', '1/2 tsp Cumin'],
    ['Preheat oven to 425 degrees Fahrenheit. Wash and peel your sweet potatoes and cut into large chunks. They can be as big or as small as you like, but bigger will take longer to cook. I usually do about 1 inch cubes. Add to a bowl and drizzle with olive oil and seasonings and add to a baking sheet lined with parchment paper or a silicone baking mat.', 'Peel and chop the onion into strips and add to the baking sheet. Roast for about 25-30 minutes or until the edges of the potatoes are golden brown and they can be easily pierced with a fork.', ' While the sweet potatoes are roasting, heat a skillet over medium heat. Add the drained chickpeas to a mixing bowl and toss with the seasonings. Once the skillet is hot, add 1 tbsp oil and the seasoned chickpeas and sauté, stirring frequently for about 10 minutes. They are done when they\’re warmed up and slightly browning on the outside.', 'Transfer the chickpeas to a bowl and set aside. In the same pan (no need to clean it) add the de-stemmed and chopped kale and saute for 2 minutes to allow it to wilt slightly. This will just make it less tough and easier to chew!', 'To serve, add a bed of quinoa to a bowl and top with the kale, chickpeas, roasted onion, sweet potatoes, avocado, and drizzle with the dressing.']
)

// Carne Asada Street Tacos
newRecipes.addRecipe(
    'Carne Asada Street Tacos',
    'Succulent strips of tenderized flank or skirt steak are bathed in a marinade bursting with the zesty tang of citrus, a hint of smoky spices, and a touch of sweetness. Grilled to perfection and nestled in warm flour tortillas, these tacos are then elevated with vibrant pico de gallo and fragrant cilantro, creating a fiesta of flavors that will ignite your taste buds and leave you craving more.',
    '/images/carne-asada-street-tacos.jpeg',
    ['2 packs flank or skirt steak', 'Soy sauce', 'Orange juice or Pineapple juice',  '4 limes', 'Cayenne pepper', 'Onion powder', 'Garlic powder', 'Cumin', 'Ground coriander', 'Chili powder', 'Smoked paprika', 'Olive oil', 'Brown sugar', 'Flour tortilla'],
    ['Tenderize steak and cut into small strips', 'In a  bowl, add spices,  fruit juices, and  olive oil. Mix thoroughly.', 'Add meat to marinade and  let sit for 10 mintues.', 'Pour meat and marinade into pan and simmer on low-medium until the sauce cooks down.', 'Serve on tortilla with pico de gallo and cilantro']
)

// Mediterrenean Hummus Bowl
newRecipes.addRecipe(
    'Mediterrenean Hummus Bowl',
    'Indulge in the vibrant flavors of a Mediterranean Hummus Bowl, a feast for both the eyes and the palate. Velvety smooth homemade hummus, made from freshly blended chickpeas, tahini, and zesty lemon juice, forms the foundation of this delightful dish. Adorned with a colorful array of baby spinach, juicy cherry tomatoes, crisp cucumber slices, briny olives, and a sprinkle of parsley, this nourishing bowl is a celebration of freshness and texture. Drizzled with extra virgin olive oil and served atop a bed of fluffy quinoa, each spoonful is a tantalizing journey through the vibrant Mediterranean flavors.',
    'images/Mediterranean-Hummus-Bowl.jpg',
    ['2 cups Baby spinach', '1/2 pint Cherry tomatoes', '1 15 ounce can Chickpeas', '1 1 cup can Chickpeas', '1/2 English cucumbers', '1 Garlic cloves', '1 Parsley', '1/2 Red onion', '3 tbsp Lemon juice', '1/2 cup Olives', '2 tbsp Tahini', '1 cup Quinoa', '1/2 tsp Salt', '1 Extra Virgin olive oil'],
    ['Place chickpeas in a bowl of water and rub them together to peel the skin (optional step, but helps create a creamy texture).', 'Drain the garbanzo beans and transfer them to a food processor. Blend them alone until they become powder-like, scraping down the sides as needed.', 'Add the lemon juice, tahini, garlic cloves and salt and 2-3 ice cubes, and blend for about 5 minutes until smooth. Taste and adjust as needed by adding more lemon juice or salt.', 'Spoon the hummus onto a plate or bowl, and spread the hummus with the back of a spoon to create swirls.', 'Assemble the remaining ingredients on top of the hummus as desired.']
)

// Greek Chicken Orzo Power Bowls
newRecipes.addRecipe(
    'Greek Chicken Orzo Power Bowls',
    'Tender slices of seasoned chicken, perfectly cooked orzo pasta, and a refreshing medley of cucumbers, shallots, and cherry tomatoes are artfully arranged in a bowl. Drizzled with zesty lemon juice, adorned with dollops of creamy Tzatziki sauce, and sprinkled with crumbled feta cheese, this bowl is a harmonious symphony of textures and flavors. Top it off with fresh mint leaves for a final touch of brightness, and enjoy a delightful and nutritious feast that will leave you feeling nourished and satisfied.',
    'images/Greek-Chicken-and-Orzo-Power-Bowls.jpg',
    ['4 cups prepared orzo pasta', '2 tbsp olive oil', 'boneless', '2 tbsp dried oregano', '1 tbsp dried basil', '1 tsp salt', '½ tsp pepper', '1 cucumber sliced and quartered', '2 large shallots diced', '12 cherry tomatoes halved or diced', '2 tbsp lemon juice', '1 cup Tzatziki sauce', '½ cup feta cheese crumbled', '1 bunch Fresh mint for garnish if desired'],
    ['Prepare orzo in advance according to package directions. Set aside.', 'In a large skillet or non-stick pan, heat olive oil over medium heat.', 'Place chicken in pan and sprinkle half of your oregano, basil, salt and pepper over top. Cook for about 6 to 8 minutes. Flip chicken over and sprinkle with remaining oregano, basil, salt and pepper. Cook for another 6 to 8 minutes, or until juices run clear and chicken is golden brown. Remove from pan and allow to cool for 5 minutes. Slice thinly.', 'Cut up cucumbers, shallots and tomatoes. Mix in bowl and drizzle with lemon juice. Season with salt and pepper, if desired.', 'Place orzo in bottom of each bowl. Place sliced chicken in bowl. Add veggie mixture in bowl. Add dollops of Tzatziki sauce randomly around bowl.', 'Sprinkle with feta cheese.', 'Add sprigs of mint, if desired.', 'Serve immediately.']
)

// Cajun Chicken with Coriander and Lime Rice
newRecipes.addRecipe(
    'Cajun Chicken with Coriander and Lime Rice',
    'Tender chicken thighs, coated in a tantalizing Cajun seasoning, are grilled to perfection, resulting in a smoky charred exterior and juicy, flavorful meat. The fragrant coriander and zesty lime infused rice serves as a vibrant bed for the succulent chicken slices, accompanied by char-grilled peppers, onion, and creamy chunks of avocado. ',
    'images/cajun-chicken-lime-rice-banner.jpg',
    ['150 g dried long grain rice', '1.5 tbsp Cajun seasoning', '2 skinless chicken thighs', '1.5 tbsp olive oil', '½ red bell pepper - deseeded and sliced', '½ yellow bell pepper - deseeded and sliced', '½ green bell pepper - deseeded and sliced', '1 small brown onion - peeled and sliced', '1 small bunch coriander - (cilantro), roughly torn', 'Zest of 1 lime', '1 avocado - peeled, de-stoned and chopped'],
    ['Boil a large pan of water, add the rice and simmer for 15 minutes until the rice is tender. Pour into a sieve and leave to drain.', 
    'Whilst the rice is cooking, heat a cast iron griddle pan on a high heat and brush on a little oil.', 
    'Sprinkle the Cajun seasoning and pour half the oil on the chicken breasts and rub it in using your hands. Flatten the chicken breasts slightly with your hands and place on the hot griddle. Cook for 7-10 minutes, turning once, until the chicken is charred and no longer pink in the middle. Place on a chopping board to rest whilst you cook the vegetables.', 
    'Brush the rest of the oil on the griddle and place the peppers and onion on in a single layer. Cook for 5-6 minutes, turning a couple of times, until lightly charred.', 
    'By now the rice should be cooked and drained. Fluff it up with a fork and stir through the coriander and lime zest.', 
    'Divide the rice between two bowls. Cut the chicken breasts into slices and place on top of the rice. Add the char-grilled peppers and onion and top with the chopped avocado.']
)

// Blackened Shrimp with Mango Salsa
newRecipes.addRecipe(
    'Blackened Shrimp with Mango Salsa',
    'Succulent shrimp, coated in a harmonious blend of paprika, chili powder, oregano, and spices, are seared to perfection, resulting in a rich and smoky flavor. The accompanying Mango Salsa, bursting with the freshness of ripe mango, juicy tomatoes, zesty red onion, and a hint of jalapeño, adds a delightful burst of sweetness and tanginess. Drizzle it all with a creamy and herbaceous Cilantro Lime Dressing, made with Greek yogurt, cilantro, avocado, and lime, for the perfect finishing touch. With each bite, you\'ll experience a delightful medley of flavors that will leave your taste buds craving more.',
    'images/Shrimp-with-mango-salsa.jpg',
    ['1 tbsp paprika', '1 tbsp chili powder', '1 tbsp dried oregano', '1 tsp ground black pepper (to taste)', '1 tsp sea salt (to taste)', '2 tbsp olive oil', 'Cilantro Lime Dressing Recipe: 1/3 cup plain Greek yogurt', '1 small bunch cilantro', '1/4 cup extra virgin olive oil', 'juice of 2 limes', '1 medium ripe avocado', '2 cloves garlic', '2 stalks green onions', '1 tsp sea salt (to taste)', '1/2 tsp ground black pepper (to taste)', 'Mango Avocado Salsa Recipe', '1 medium ripe mango', '1 medium tomato', '1/4 cup red onion', '1 seeded jalapeño (optional)', '1/2 lime', 'salt and pepper (to taste)'],
    ['Peel and remove tails off of the shrimp, pat dry the shrimp and place in a bowl.', 
        'Pour paprika, chili powder, oregano, salt and pepper into the bowl with the shrimp.',
        'Mix everything together until the shrimp is thoroughly coated with the dry rub.',
        'Pour olive oil in a pan and heat up the pan on the stove over medium-high heat.',
        'Arrange the shrimp in a single layer and cook for 2 minutes. Flip and cook for an additional 2 minutes.',
        'Separately, make the cilantro lime dressing. In a blender or nutribullet add greek yogurt, a bunch of cilantro, olive oil, lime juice, avocado, garlic cloves, green onion stalks and salt to taste. Blend together until smooth.',
        'In another bowl make your mango salsa. Dice mango, tomatoes, onions, and jalapeño, if using. Squeeze fresh lime juice and season with salt and pepper.',
        'Assemble your blackened shrimp bowl over rice or your favorite grain. Top with mango salsa and the cilantro lime dressing.']
)

// Balsamic Steak Gorgonzola Salad with Grilled Corn
newRecipes.addRecipe(
    'Balsamic Steak Gorgonzola Salad with Grilled Corn',
    'Indulge in the exquisite flavors of Balsamic Steak Gorgonzola with Grilled Corn, a sensational dish that combines juicy sirloin steak with a tantalizing blend of balsamic vinegar, Worcestershire sauce, and aromatic spices. This dish features fresh cherry tomatoes, red onion, creamy Gorgonzola cheese, endive lettuce, mixed spring greens, and grilled corn, this dish is a symphony of flavors and textures.',
    'images/Balsamic-Steak-Gorgonzola-Salad-with-Grilled-Corn.jpg',
    ['1 lb sirloin steak', '2 tablespoons balsamic vinegar', '1 tablespoon Worcestershire sauce', '¼ cup extra virgin olive oil', '½ teaspoon dijon mustard', '¼ teaspoon garlic powder', '½ teaspoon coarse salt', '¼ teaspoon ground black pepper', 'FOR THE SALAD: 1 cup cherry tomatoes, halved', '½ red onion, thinly sliced', '4 ounces Gorgonzola cheese, crumbled', '2 heads endive lettuce, outer leaves removed, halved and roughly chopped into 2 inch pieces', '6 cups mixed spring greens', '1 corn on the cob, husk removed', '1 tablespoon extra virgin olive oil, for drizzling corn', 'FOR THE GREMOLATA: 2 tablespoons basil leaves, minced', '2 tablespoons parsley, minced', '1 clove garlic, minced', '1 tablespoon lemon zest', 'FOR THE BALSAMIC VINAIGRETTE: 3 tablespoons balsamic vinegar', '½ cup extra virgin olive oil', '½ teaspoon dijon mustard', 'Dash of salt and fresh ground black pepper'],
    ['Marinate the steak: In a medium size bowl, stir together ingredients for the marinade. Place steaks in a large ziplock bag. Pour marinade over the steaks, seal the bag, and shake to coat. Chill in the fridge for 30 minutes.',
    'Make the gremolata: Combine the basil, parsley, lemon zest, and garlic in a small bowl. Set aside.',
    'Preheat a cast iron grill pan at medium-high heat or an outdoor grill. Drizzle corn on the cob with 1 tablespoon olive oil and liberally sprinkle salt and pepper. Using tongs, place on the heated grill. Cook each side until grill marks form on the corn kernels and they are somewhat softened, about 10 minutes total. Remove from heat when done and let cool. Slice corn kernels off the cob.',
    'Remove the steak from the fridge. Place on the grill or grill pan. Grill both sides 4-5 minutes for rare to medium rare. Remove steak to a plate and let rest for five minutes. Slice thinly against the grain.',
    'In a small bowl, whisk together ingredients for vinaigrette.',
    'Toss together half of the vinaigrette, half of the gremolata, mixed greens, endives, tomatoes, gorgonzola, sliced corn, and red onion in a large bowl.',
    'Lay sliced steak on top of salad. Drizzle steak and salad with gremolata and remaining vinaigrette as desired.']
)

// Korean-style Sauteed Beef with Bean Sprouts and Cabbage
newRecipes.addRecipe(
    'Korean-style Sauteed Beef with Bean Sprouts and Cabbage',
    'Indulge in the exquisite flavors of Korean-style sautéed beef with bean sprouts and cabbage. Ground beef is cooked with a savory blend of soy sauce, brown sugar (or honey), sesame oil, and fresh ginger, creating a delectable sauce. Serve this dish atop steamed rice for a satisfying and flavorful meal.',
    'images/Korean-Style-sauteed-beef.jpg',
    ['¼ cup soy sauce',
        '¼ cup brown sugar (can substitute with honey)',
        '2 tsp sesame oil',
        '2-3 tbsp fresh ginger, grated',
        '1 lb ground beef',
        '4 cloves garlic, peeled and minced',
        '1 cup carrots, julienned or shredded',
        '2 cups cabbage, shredded or coarsely chopped',
        '1 pack bean sprouts, (about 3 cups)'],
    ['Combine the seasoning sauce (soy sauce, sugar, sesame oil and fresh ginger). We love ginger so we use the full 3 tablespoons but adjust it to your taste. Set aside.',
    ' In medium heat, cook the ground beef in a skillet or wok until the meat changes its color. No need to add oil if your beef is 80/20 or has a little bit of fat. Add the minced garlic and continue to cook until the beef is deep-brown in color and crunchy.',
    'Increase the heat, add the carrots and saute for about 1 minute. Add the cabbage and bean sprouts and cook for another minute.',
    'Pour all the sauce into the beef and veggie mixture and mix well. Cook just until everything is heated through – another minute or so. Serve immediately on top of rice.']
)

// Japchae (Korean Glass Noodle Stir Fry)
newRecipes.addRecipe(
    'Japchae (Korean Glass Noodle Stir Fry)',
    'Japchae is a delightful Korean dish featuring sweet potato glass noodles stir-fried with beef or pork, an assortment of colorful vegetables, and a flavorful sauce. The noodles are cooked until tender and then combined with sautéed vegetables, thinly sliced egg crepe, and seared meat. Finished off with a delectable sauce, Japchae is a versatile dish that can be enjoyed hot or cold, making it a perfect choice for any occasion.',
    'images/japchae-noodles.jpg',
    ['12 ounces sweet potato glass noodles',
        '16 ounces beef or pork cut into strips (cuts like flank, skirt, ribeye are great; you can use pork instead too)',
        '2 large egg beaten',
        '1 large carrot peeled and julienned',
        '1 medium yellow onion thinly sliced',
        '3 mushrooms thinly sliced (any mushrooms of your choice)',
        '2 cups baby spinach packed',
        '2 stalks green onion cut into 1 inch pieces',
        'oil for cooking',
        'Toasted sesame seed (optional for garnish)',
        'Salt and black pepper as needed',
        'For the japchae sauce: 7 tablespoons soy sauce light sodium',
        '3 tablespoons honey (or use more brown sugar)',
        '2 tablespoons brown sugar (light or dark)',
        '2 tablespoons toasted sesame oil'],
    ['Make the japchae sauce: Mix together all the ingredients for the sauce and set aside.',
        'In a large pot of boiling water, add the japchae noodles and boil until the noodles are cooked through, about 10-15 minutes depending on the brand. Stir occassionally to prevent the noodles from sticking.',
        'Once the sweet potato noodles are cooked, drain it immediately and rinse thoroughly with cold water until completely cooled. Drain the noodles well and set aside.',
        'In a large nonstick pan over medium heat, add a small amount of oil. When the oil is hot, pour in the beaten eggs. Tilt the pan to spread the egg into a thin layer and cook until the egg crepe is set on the bottom. Flip the egg crepe and and cook the other side briefly. Remove from pan and let it cool until comfortable to handle.',
        'Once the egg crepe has cooled, fold it in half and cut the egg crepe into thin strips. Set aside until needed.',
        'Cook the beef (or pork): In the same pan over medium high heat, add a small amount of oil. When the oil is hot, add the beef and lightly season with some salt and pepper. Sear the beef until golden brown and cooked through, about 4 to 5 minutes. Remove from pan and set aside.',
        'In the same pan over medium heat, sauteé the vegetables.Cook the vegetables just until they become tender. Then, remove from pan and set aside.',
       ' In the same large pan or a stir fry pan over medium heat, add the prepared japchae sauce. Stir the sauce occasionally until the sugar is completely dissolved and the sauce is starting to bubble. Turn the heat to low.',
        'To the sauce, add the japchae noodles and mix until the noodles are evenly coated. Then, add the rest of the prepared ingredients. Toss until everything is evenly combined and remove from heat.',
       'Portion the japchae or serve it family style with a sprinkle of sesame seeds. Japchae can be enjoyed hot, warm, room temperature, or slightly chilled.']
)

// Korean-style Sauteed Beef with Bean Sprouts and Cabbage
// newRecipes.addRecipe(
//     'Korean-style Sauteed Beef with Bean Sprouts and Cabbage',
//     ' x ',
//     'images/Korean-Style-sauteed-beef.jpg',
//     ['¼ cup soy sauce',
//         '¼ cup brown sugar (can substitute with honey)',
//         '2 tsp sesame oil',
//         '2-3 tbsp fresh ginger, grated',
//         '1 lb ground beef',
//         '4 cloves garlic, peeled and minced',
//         '1 cup carrots, julienned or shredded',
//         '2 cups cabbage, shredded or coarsely chopped',
//         '1 pack bean sprouts, (about 3 cups)'],
//     ['Combine the seasoning sauce (soy sauce, sugar, sesame oil and fresh ginger). We love ginger so we use the full 3 tablespoons but adjust it to your taste. Set aside.',
//     ' In medium heat, cook the ground beef in a skillet or wok until the meat changes its color. No need to add oil if your beef is 80/20 or has a little bit of fat. Add the minced garlic and continue to cook until the beef is deep-brown in color and crunchy.',
//     'Increase the heat, add the carrots and saute for about 1 minute. Add the cabbage and bean sprouts and cook for another minute.',
//     'Pour all the sauce into the beef and veggie mixture and mix well. Cook just until everything is heated through – another minute or so. Serve immediately on top of rice.']
// )