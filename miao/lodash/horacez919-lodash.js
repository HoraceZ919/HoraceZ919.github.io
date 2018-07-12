var horacez919 = {
  chunk:function(nums, size) {
    var result=[]
    for (var i = 0, len=nums.length; i < len; i+=size) {
      result.push(nums.slice(i, i+size))
    }
    return result
  },

  compact:function(nums) {
    var result=[]
    for (var i = 0, len=nums.length; i < len; i++) {
      if (nums[i]) {
        result.push(nums[i])
      }
    }
    return result
  },

  drop:function(array, num) {
    var result=[]
    var num=num || 1
    var len=array.length
    result=array.slice(num, len)
    return result
  },

  dropRight:function(array, num) {
    var result=[]
    var num=num || 1
    var len=array.length
    result=array.slice(0, len-num)
    return result
  },

  fill:function(array, value, start, end) {
    start=start || 0
    end=end || array.length
    for (var i = 0, len=array.length; i < len; i++) {
      array[i]=value
    }
  },


  flatten:function(array) {
    var result=[]
    for (var i = 0, len=array.length; i < len; i++) {
      if (array[i].length) {
        for (var j = 0; j < array[i].length; j++) {
          result.push(array[i][j])
        }
      } else result.push(array[i])
    }
    return result
  },


  flattenDeep:function(array) {
    var result=[]
    function flattenIn(array) {
      for (var i = 0, len=array.length; i < len; i++) {
        if (array[i].length) {
          flattenIn(array[i])
        } else result.push(array[i])
      }
    }
    flattenIn(array)
    return result
  },


  flattenDepth:function(array, depth) {
    var result=[]
    var count=0
    function flattenIn(array) {
      for (var i = 0, len=array.length; i < len; i++) {
        if (count > depth) {
          count--
          break
        }
        if (array[i].length) {
          if (count == depth) {
            result.push(array[i])
          }
          count++
          flattenIn(array[i])
        } else result.push(array[i])
      }
    }
    flattenIn(array)
    return result
  }，

  
  head:function(array) {
    return array=null?null:array[0]
  },

  indexOf:function(array, value, index) {
    index=index || 0
    if (index < 0) {
      for (var i = array.length-1; i >= 0; i--) {
        if (array[i] === value) {
          return i
        }
      }
    } else {
        for (var i = index, len=array.length; i < len; i++) {
          if (array[i] === value) {
            return i
          }
        }
      }
  },


  initial:function(array) {
    return array=null?null:array.slice(0, array.length-1)
  },

  last:function(array) {
    return array=null?null:array[array.length-1]
  },

  lastIndexOf:function(array, value, index) {
    index=index || array.length-1
    for (var i = index; i >= 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  },


  'prototype.reverse':function(nums, left, right) {
    var left=left || 0, right=right || nums.length-1
    if (left < right) {
      [nums[left], nums[right]]=[nums[right], nums[left]]
      reverse(nums, left+1, right-1)
    }
    return nums
  },



}
