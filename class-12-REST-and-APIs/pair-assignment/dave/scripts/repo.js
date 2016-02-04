(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE
    // TODO: How would you like to fetch your repos? Don't forget to call the callback.

    // Need to empty out the array or it will dulicate info
    repos.all = [];

    $.ajax({
      url:"https://api.github.com/users/billyham/repos",
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success:function(data){
        // Do I need to parse this first??? The answer is NO.
        data.forEach(function(element){
          repos.all.push( {
            name: element.name,
            description: element.description,
            url: element.html_url,
            fork: element.fork,
            has_issues: element.has_issues});
        });
        callback();
      }
    });
  };

  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
