const getTotalIsles = function (grid) {


  // write your code here
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;

 
  const dfs = (grid, i, j) => {
  
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') {
      return;
    }

    
    grid[i][j] = 'W';

    
    dfs(grid, i + 1, j); 
    dfs(grid, i - 1, j); 
    dfs(grid, i, j + 1); 
    dfs(grid, i, j - 1); 
  };

  let islandCount = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {

      if (grid[i][j] === 'L') {

        dfs(grid, i, j);
        islandCount++;
      }
    }
  }

  return islandCount;

};

module.exports = getTotalIsles;