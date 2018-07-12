var HoraceZ919 = {
  chunk:function(nums, size) {
    var result=[]
    for (var i = 0, len=nums.length; i < len; i+=size) {
      result.push(nums.slice(i, i+size))
    }
    return result
  }

  compact:function(nums) {
    var result=[]
    for (var i = 0, len=nums.length; i < len; i++) {
      if (nums[i]) {
        result.push(nums[i])
      }
    }
    return result
  }

  drop:function(array, num) {
    var result=[]
    var num=num || 1
    var len=array.length
    result=array.slice(num, len)
    return result
  }

  dropRight:function(array, num) {
    var result=[]
    var num=num || 1
    var len=array.length
    result=array.slice(0, len-num)
    return result
  }

  fill:function(array, value, start, end) {
    start=start || 0
    end=end || array.length
    for (var i = 0, len=array.length; i < len; i++) {
      array[i]=value
    }
  }

  head:function(array) {
    return array=null?null:array[0]
  }

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
  }
}
