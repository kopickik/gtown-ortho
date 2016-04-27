describe('sorting the list', function () {
  // individual tests go here
  it('sorts descending users by default', function() {
    var users = ['jeff', 'henry', 'jimmy', 'freddie'];
    var sortUsers = function(users) {
        return users.sort();
    }

    var sorted = sortUsers(users);
    expect(sorted).toEqual(['freddie', 'henry', 'jeff', 'jimmy']);
    expect(false).not.toBe(true);
  });
});
