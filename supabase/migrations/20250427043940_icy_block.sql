/*
  # Create recipes and ingredients tables

  1. New Tables
    - `recipes`
      - `id` (uuid, primary key)
      - `title` (text)
      - `instructions` (text[])
      - `servings` (integer)
      - `prep_time` (text)
      - `image_url` (text)
      - `created_at` (timestamp)
    - `recipe_ingredients`
      - `id` (uuid, primary key)
      - `recipe_id` (uuid, foreign key)
      - `ingredient` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
*/

CREATE TABLE IF NOT EXISTS recipes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  instructions text[] NOT NULL,
  servings integer NOT NULL,
  prep_time text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS recipe_ingredients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  recipe_id uuid REFERENCES recipes(id) ON DELETE CASCADE,
  ingredient text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipe_ingredients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to recipes"
  ON recipes
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to recipe ingredients"
  ON recipe_ingredients
  FOR SELECT
  TO public
  USING (true);

-- Create function to find recipes by ingredients
CREATE OR REPLACE FUNCTION find_recipes_by_ingredients(ingredient_list text[])
RETURNS TABLE (
  recipe_id uuid,
  title text,
  instructions text[],
  servings integer,
  prep_time text,
  image_url text,
  match_count bigint
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    r.id as recipe_id,
    r.title,
    r.instructions,
    r.servings,
    r.prep_time,
    r.image_url,
    COUNT(DISTINCT ri.ingredient) as match_count
  FROM recipes r
  JOIN recipe_ingredients ri ON r.id = ri.recipe_id
  WHERE ri.ingredient = ANY(ingredient_list)
  GROUP BY r.id, r.title, r.instructions, r.servings, r.prep_time, r.image_url
  ORDER BY match_count DESC, r.title
  LIMIT 10;
END;
$$;