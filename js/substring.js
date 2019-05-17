// Generated by CoffeeScript 2.3.2
var assert, print, substring;

assert = function(a, b) {
  if (a !== b) {
    print(`${a} != ${b}`);
    throw 'assert failure!';
  }
};

print = console.log;

substring = function(left, right, start, stop) {
  var left_start, left_stop, left_sub, right_sub;
  if (start === 0 && stop === left.length + right.length) {
    return left + right;
  } else {
    left_start = start;
    left_stop = stop;
    left_sub = start > left.length ? "" : left.slice(left_start, left_stop);
    right_sub = stop <= left.length ? "" : "d";
    return left_sub + right_sub;
  }
};

assert("abcdef", substring("abc", "def", 0, 6));

assert("a", substring("abc", "def", 0, 1));

assert("abc", substring("abc", "def", 0, 3));

assert("c", substring("abc", "def", 2, 3));

assert("d", substring("abc", "def", 3, 4));

// "abc", "def", 2,5 -> "cde"

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJzdWJzdHJpbmcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUE7O0FBQUEsTUFBQSxHQUFTLFFBQUEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFBO0VBQVMsSUFBRyxDQUFBLEtBQUssQ0FBUjtJQUNkLEtBQUEsQ0FBTSxDQUFBLENBQUEsQ0FBRyxDQUFILENBQUssSUFBTCxDQUFBLENBQVcsQ0FBWCxDQUFBLENBQU47SUFDQSxNQUFNLGtCQUZROztBQUFUOztBQUlULEtBQUEsR0FBUSxPQUFPLENBQUM7O0FBRWhCLFNBQUEsR0FBWSxRQUFBLENBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxLQUFkLEVBQXFCLElBQXJCLENBQUE7QUFDUixNQUFBLFVBQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSxFQUFBO0VBQUEsSUFBRyxLQUFBLEtBQVMsQ0FBVCxJQUFlLElBQUEsS0FBUSxJQUFJLENBQUMsTUFBTCxHQUFjLEtBQUssQ0FBQyxNQUE5QztXQUNJLElBQUEsR0FBSyxNQURUO0dBQUEsTUFBQTtJQUdJLFVBQUEsR0FBYTtJQUNiLFNBQUEsR0FBWTtJQUNaLFFBQUEsR0FBYyxLQUFBLEdBQU0sSUFBSSxDQUFDLE1BQWQsR0FBMEIsRUFBMUIsR0FBa0MsSUFBSSxDQUFDLEtBQUwsQ0FBVyxVQUFYLEVBQXNCLFNBQXRCO0lBQzdDLFNBQUEsR0FBZSxJQUFBLElBQU0sSUFBSSxDQUFDLE1BQWQsR0FBMEIsRUFBMUIsR0FBa0M7V0FDOUMsUUFBQSxHQUFXLFVBUGY7O0FBRFE7O0FBVVosTUFBQSxDQUFPLFFBQVAsRUFBaUIsU0FBQSxDQUFVLEtBQVYsRUFBZ0IsS0FBaEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBakI7O0FBQ0EsTUFBQSxDQUFPLEdBQVAsRUFBWSxTQUFBLENBQVUsS0FBVixFQUFnQixLQUFoQixFQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFaOztBQUNBLE1BQUEsQ0FBTyxLQUFQLEVBQWMsU0FBQSxDQUFVLEtBQVYsRUFBZ0IsS0FBaEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBZDs7QUFDQSxNQUFBLENBQU8sR0FBUCxFQUFZLFNBQUEsQ0FBVSxLQUFWLEVBQWdCLEtBQWhCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBQVo7O0FBQ0EsTUFBQSxDQUFPLEdBQVAsRUFBWSxTQUFBLENBQVUsS0FBVixFQUFnQixLQUFoQixFQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFaOztBQXBCQSIsInNvdXJjZXNDb250ZW50IjpbImFzc2VydCA9IChhLGIpIC0+IGlmIGEgIT0gYlxyXG4gICAgcHJpbnQgXCIje2F9ICE9ICN7Yn1cIlxyXG4gICAgdGhyb3cgJ2Fzc2VydCBmYWlsdXJlISdcclxuXHJcbnByaW50ID0gY29uc29sZS5sb2cgXHJcblxyXG5zdWJzdHJpbmcgPSAobGVmdCwgcmlnaHQsIHN0YXJ0LCBzdG9wKSAtPiBcclxuICAgIGlmIHN0YXJ0ID09IDAgYW5kIHN0b3AgPT0gbGVmdC5sZW5ndGggKyByaWdodC5sZW5ndGhcclxuICAgICAgICBsZWZ0K3JpZ2h0XHJcbiAgICBlbHNlXHJcbiAgICAgICAgbGVmdF9zdGFydCA9IHN0YXJ0XHJcbiAgICAgICAgbGVmdF9zdG9wID0gc3RvcFxyXG4gICAgICAgIGxlZnRfc3ViID0gaWYgc3RhcnQ+bGVmdC5sZW5ndGggdGhlbiBcIlwiIGVsc2UgbGVmdC5zbGljZSBsZWZ0X3N0YXJ0LGxlZnRfc3RvcFxyXG4gICAgICAgIHJpZ2h0X3N1YiA9IGlmIHN0b3A8PWxlZnQubGVuZ3RoIHRoZW4gXCJcIiBlbHNlIFwiZFwiXHJcbiAgICAgICAgbGVmdF9zdWIgKyByaWdodF9zdWJcclxuXHJcbmFzc2VydCBcImFiY2RlZlwiLCBzdWJzdHJpbmcgXCJhYmNcIixcImRlZlwiLCAwLCA2XHJcbmFzc2VydCBcImFcIiwgc3Vic3RyaW5nIFwiYWJjXCIsXCJkZWZcIiwgMCwgMVxyXG5hc3NlcnQgXCJhYmNcIiwgc3Vic3RyaW5nIFwiYWJjXCIsXCJkZWZcIiwgMCwgM1xyXG5hc3NlcnQgXCJjXCIsIHN1YnN0cmluZyBcImFiY1wiLFwiZGVmXCIsIDIsIDNcclxuYXNzZXJ0IFwiZFwiLCBzdWJzdHJpbmcgXCJhYmNcIixcImRlZlwiLCAzLCA0XHJcblxyXG4jIFwiYWJjXCIsIFwiZGVmXCIsIDIsNSAtPiBcImNkZVwiICAgXHJcbiAiXX0=
//# sourceURL=c:\github\vscode\substring.coffee