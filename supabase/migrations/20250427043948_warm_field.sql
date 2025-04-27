/*
  # Seed initial recipes

  1. Purpose
    - Add initial set of recipes with ingredients
    - Provide diverse recipe options for testing
*/

-- Insert recipes
INSERT INTO recipes (id, title, instructions, servings, prep_time, image_url) VALUES
  (
    gen_random_uuid(),
    'Vegetable Stir Fry',
    ARRAY[
      'Heat oil in a large wok or skillet',
      'Add vegetables and stir fry until tender-crisp',
      'Add sauce and seasonings',
      'Serve hot over rice'
    ],
    4,
    '20 mins',
    'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg'
  ),
  (
    gen_random_uuid(),
    'Simple Pasta Primavera',
    ARRAY[
      'Cook pasta according to package instructions',
      'Sauté vegetables in olive oil',
      'Combine pasta and vegetables',
      'Season with herbs and cheese'
    ],
    6,
    '25 mins',
    'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg'
  ),
  (
    gen_random_uuid(),
    'Fresh Fruit Salad',
    ARRAY[
      'Wash and chop all fruits',
      'Combine in a large bowl',
      'Add honey and lemon juice',
      'Chill before serving'
    ],
    8,
    '15 mins',
    'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg'
  );

-- Insert recipe ingredients
WITH recipes_data AS (
  SELECT id FROM recipes WHERE title = 'Vegetable Stir Fry' LIMIT 1
)
INSERT INTO recipe_ingredients (recipe_id, ingredient)
SELECT id, unnest(ARRAY['carrots', 'broccoli', 'bell peppers', 'onions', 'garlic', 'ginger'])
FROM recipes_data;

WITH recipes_data AS (
  SELECT id FROM recipes WHERE title = 'Simple Pasta Primavera' LIMIT 1
)
INSERT INTO recipe_ingredients (recipe_id, ingredient)
SELECT id, unnest(ARRAY['pasta', 'tomatoes', 'zucchini', 'carrots', 'garlic', 'olive oil', 'parmesan'])
FROM recipes_data;

WITH recipes_data AS (
  SELECT id FROM recipes WHERE title = 'Fresh Fruit Salad' LIMIT 1
)
INSERT INTO recipe_ingredients (recipe_id, ingredient)
SELECT id, unnest(ARRAY['apples', 'oranges', 'bananas', 'grapes', 'strawberries', 'honey', 'lemon'])
FROM recipes_data;