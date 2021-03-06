# Let us consider this example (array written in general format):

# ls = [0, 1, 3, 6, 10]

# Its following parts:

# ls = [0, 1, 3, 6, 10]
# ls = [1, 3, 6, 10]
# ls = [3, 6, 10]
# ls = [6, 10]
# ls = [10]
# ls = []
# The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

# The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

# Other Examples:
# ls = [1, 2, 3, 4, 5, 6] 
# parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

def parts_sums(ls)
    # your code
    sums = []
    
    i = 0
    loop do
      sum = ls.reduce(0){|num, sum| num + sum}
      sums.push(sum)
      ls.shift()
      if i == ls.length
        break 
      end
    end
    if sums.length > 1
      sums.push(0)
    end
    sums
  end


# Complete the square sum function so that it squares each number passed into it and then sums the results together.

# For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

def square_sum(numbers)
  squares = numbers.map{|number| number * number}
  squares.reduce(0){|num, sum| num + sum}
end

# Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

def bool_to_word bool
  if bool == true
    return "Yes"
  end
    "No"
end