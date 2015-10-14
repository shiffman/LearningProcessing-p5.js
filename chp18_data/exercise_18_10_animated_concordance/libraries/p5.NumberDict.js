
function createNumberDict() {
  return new p5.NumberDict();
}

/**
 * A simple class to use a String as a lookup for an int value.
 *
 * @webref data:composite
 * @see FloatDict
 * @see StringDict
 */
p5.NumberDict = function(keys, values) {

  this.keys = keys || [];
  this.values = values || [];
  this.count = this.keys.length;
  this.indices = {};

  for (var i = 0; i < this.count; i++) {
    this.indices[this.keys[i]] = i;
  }
}


/**
 * Returns the number of key/value pairs
 *
 * @webref intdict:method
 * @brief Returns the number of key/value pairs
 */
p5.NumberDict.prototype.size = function() {
  return this.count;
}


/**
 * Remove all entries.
 *
 * @webref intdict:method
 * @brief Remove all entries
 */
p5.NumberDict.prototype.clear = function() {
  this.count = 0;
  this.indices = {};
  this.keys = [];
  this.values = [];
}


p5.NumberDict.prototype.key = function(index) {
  return this.keys[index];
}



// // Use this with 'for' loops
// public Iterable<String> keys() {
//   return new Iterable<String>() {

//     @Override
//     public Iterator<String> iterator() {
//       return keyIterator();
// //        return new Iterator<String>() {
// //          int index = -1;
// //
// //          public void remove() {
// //            removeIndex(index);
// //          }
// //
// //          public String next() {
// //            return key(++index);
// //          }
// //
// //          public boolean hasNext() {
// //            return index+1 < size();
// //          }
// //        };
//     }
//   };
// }


// // Use this to iterate when you want to be able to remove elements along the way
// public Iterator<String> keyIterator() {
//   return new Iterator<String>() {
//     int index = -1;

//     public void remove() {
//       removeIndex(index);
//     }

//     public String next() {
//       return key(++index);
//     }

//     public boolean hasNext() {
//       return index+1 < size();
//     }
//   };
// }


/**
 * Return a copy of the internal keys array. This array can be modified.
 *
 * @webref intdict:method
 * @brief Return a copy of the internal keys array
 */
p5.NumberDict.prototype.keyArray = function() {
  return this.keys;
}


// public String[] keyArray(String[] outgoing) {
//   if (outgoing == null || outgoing.length != count) {
//     outgoing = new String[count];
//   }
//   System.arraycopy(keys, 0, outgoing, 0, count);
//   return outgoing;
// }


p5.NumberDict.prototype.value = function(index) {
  return this.values[index];
}


/**
 * @webref intdict:method
 * @brief Return the internal array being used to store the keys
 */
// public Iterable<Integer> values() {
//   return new Iterable<Integer>() {

//     @Override
//     public Iterator<Integer> iterator() {
//       return valueIterator();
//     }
//   };
// }


// public Iterator<Integer> valueIterator() {
//   return new Iterator<Integer>() {
//     int index = -1;

//     public void remove() {
//       removeIndex(index);
//     }

//     public Integer next() {
//       return value(++index);
//     }

//     public boolean hasNext() {
//       return index+1 < size();
//     }
//   };
// }


/**
 * Create a new array and copy each of the values into it.
 *
 * @webref intdict:method
 * @brief Create a new array and copy each of the values into it
 */
p5.NumberDict.prototype.valueArray = function() {
  return this.values;
}


/**
 * Fill an already-allocated array with the values (more efficient than
 * creating a new array each time). If 'array' is null, or not the same
 * size as the number of values, a new array will be allocated and returned.
 *
 * @param array values to copy into the array
 */
// public int[] valueArray(int[] array) {
//   if (array == null || array.length != size()) {
//     array = new int[count];
//   }
//   System.arraycopy(values, 0, array, 0, count);
//   return array;
// }


/**
 * Return a value for the specified key.
 *
 * @webref intdict:method
 * @brief Return a value for the specified key
 */
p5.NumberDict.prototype.get = function(key, alternate) {
  var index = this.index(key);
  if (index === -1) {
    if (alternate !== undefined) return alternate;
    console.log("No key named '" + key + "'");
    //throw new IllegalArgumentException("No key named '" + key + "'");
  }
  return this.values[index];
}

/**
 * Create a new key/value pair or change the value of one.
 *
 * @webref intdict:method
 * @brief Create a new key/value pair or change the value of one
 */
p5.NumberDict.prototype.set = function(key, amount) {
  var index = this.index(key);
  if (this.index === -1) {
    this.create(key, amount);
  } else {
    this.values[index] = amount;
  }
}

/**
 * @webref intdict:method
 * @brief Check if a key is a part of the data structure
 */
p5.NumberDict.prototype.hasKey = function(key) {
  return (index(key) !== -1);
}


/**
 * Increase the value associated with a specific key by 1.
 *
 * @webref intdict:method
 * @brief Increase the value of a specific key value by 1
 */
p5.NumberDict.prototype.increment = function(key) {
  this.add(key, 1);
}


/**
 * @webref intdict:method
 * @brief Add to a value
 */
p5.NumberDict.prototype.add = function(key, amount) {
  var index = this.index(key);
  if (index === -1) {
    this.create(key, amount);
  } else {
    this.values[index] += amount;
  }
}


/**
 * @webref intdict:method
 * @brief Subtract from a value
 */
p5.NumberDict.prototype.sub = function(key, amount) {
  this.add(key, -amount);
}


/**
 * @webref intdict:method
 * @brief Multiply a value
 */
p5.NumberDict.prototype.mult = function(key, amount) {
  var index = this.index(key);
  if (index !== -1) {
    this.values[index] *= amount;
  }
}


/**
 * @webref intdict:method
 * @brief Divide a value
 */
p5.NumberDict.prototype.div = function(key, amount) {
  var index = this.index(key);
  if (index !== -1) {
    this.values[index] /= amount;
  }
}


p5.NumberDict.prototype.checkMinMax = function(functionName) {
  if (count === 0) {
    console.log("Cannot use ' + functioName + '() on an empty dictionary.");
  }
}


// return the index of the minimum value
p5.NumberDict.prototype.minIndex = function() {
  this.checkMinMax("minIndex");
  var index = 0;
  var value = this.values[0];
  for (var i = 1; i < this.count; i++) {
    if (this.values[i] < value) {
      index = i;
      value = this.values[i];
    }
  }
  return index;
}


// return the minimum value
p5.NumberDict.prototype.minValue = function() {
  this.checkMinMax("minValue");
  return this.values[this.minIndex()];
}


// return the key for the minimum value
p5.NumberDict.prototype.minKey = function() {
  this.checkMinMax("minKey");
  return this.keys[this.minIndex()];
}


// return the index of the max value
p5.NumberDict.prototype.maxIndex = function() {
  this.checkMinMax("maxIndex");
  var index = 0;
  var value = this.values[0];
  for (var i = 1; i < this.count; i++) {
    if (this.values[i] > value) {
      index = i;
      value = this.values[i];
    }
  }
  return index;
}

// return the maximum value
p5.NumberDict.prototype.maxValue = function() {
  this.checkMinMax("maxValue");
  return this.values[this.maxIndex()];
}


// return the key corresponding to the maximum value
p5.NumberDict.prototype.maxKey = function() {
  this.checkMinMax("maxKey");
  return this.keys[this.maxIndex()];
}



p5.NumberDict.prototype.index = function(what) {
  var found = this.indices[what];
  return (found === undefined) ? -1 : found;
}


p5.NumberDict.prototype.create = function(what, much) {
  this.indices[what] = this.count;
  this.keys[this.count] = what;
  this.values[this.count] = much;
  this.count++;
}

/**
 * @webref intdict:method
 * @brief Remove a key/value pair
 */
p5.NumberDict.prototype.remove = function(key) {
  var index = this.index(key);
  if (index !== -1) {
    this.removeIndex(index);
  }
  return index;
}


p5.NumberDict.prototype.removeIndex = function(index) {
  if (index < 0 || index >= count) {
    console.log('this index is out of bounds');
    return;
    //throw new ArrayIndexOutOfBoundsException(index);
  }
  //System.out.println("index is " + which + " and " + keys[which]);
  var key = this.keys[index];
  indices[keys[index]] = undefined;
  for (var i = index; i < count-1; i++) {
    this.keys[i] = this.keys[i+1];
    this.values[i] = this.values[i+1];
    this.indices[keys[i]] = i;
  }
  this.count--;
  this.keys[count] = undefined;
  this.values[count] = 0;
  return key;
}


// public void swap(int a, int b) {
//   String tkey = keys[a];
//   int tvalue = values[a];
//   keys[a] = keys[b];
//   values[a] = values[b];
//   keys[b] = tkey;
//   values[b] = tvalue;

//   indices.put(keys[a], Integer.valueOf(a));
//   indices.put(keys[b], Integer.valueOf(b));
// }


/**
 * Sort the keys alphabetically (ignoring case). Uses the value as a
 * tie-breaker (only really possible with a key that has a case change).
 *
 * @webref intdict:method
 * @brief Sort the keys alphabetically
 */
// public void sortKeys() {
//   sortImpl(true, false);
// }

/**
 * Sort the keys alphabetically in reverse (ignoring case). Uses the value as a
 * tie-breaker (only really possible with a key that has a case change).
 *
 * @webref intdict:method
 * @brief Sort the keys alphabetially in reverse
 */
// public void sortKeysReverse() {
//   sortImpl(true, true);
// }


/**
 * Sort by values in ascending order. The smallest value will be at [0].
 *
 * @webref intdict:method
 * @brief Sort by values in ascending order
 */
p5.NumberDict.prototype.sortValues = function() {
  var dict = this;
  this.keys.sort(function(a, b) {
    var indexA = dict.index(a);
    var indexB = dict.index(b);
    return dict.values[indexA] - dict.values[indexB];
  });
  //sortImpl(false, false);
}

/**
 * Sort by values in descending order. The largest value will be at [0].
 *
 * @webref intdict:method
 * @brief Sort by values in descending order
 */
p5.NumberDict.prototype.sortValuesReverse = function() {
  var dict = this;
  this.keys.sort(function(a, b) {
    var indexA = dict.index(a);
    var indexB = dict.index(b);
    return dict.values[indexB] - dict.values[indexA];
  });

  //sortImpl(false, true);
}


// protected void sortImpl(final boolean useKeys, final boolean reverse) {
//   Sort s = new Sort() {
//     @Override
//     public int size() {
//       return count;
//     }

//     @Override
//     public float compare(int a, int b) {
//       int diff = 0;
//       if (useKeys) {
//         diff = keys[a].compareToIgnoreCase(keys[b]);
//         if (diff == 0) {
//           return values[a] - values[b];
//         }
//       } else {  // sort values
//         diff = values[a] - values[b];
//         if (diff == 0) {
//           diff = keys[a].compareToIgnoreCase(keys[b]);
//         }
//       }
//       return reverse ? -diff : diff;
//     }

//     @Override
//     public void swap(int a, int b) {
//       IntDict.this.swap(a, b);
//     }
//   };
//   s.run();
// }


/**
 * Sum all of the values in this dictionary, then return a new FloatDict of
 * each key, divided by the total sum. The total for all values will be ~1.0.
 * @return a Dict with the original keys, mapped to their pct of the total
 */
// public FloatDict getPercent() {
//   double sum = 0;
//   for (int value : valueArray()) {
//     sum += value;
//   }
//   FloatDict outgoing = new FloatDict();
//   for (int i = 0; i < size(); i++) {
//     double percent = value(i) / sum;
//     outgoing.set(key(i), (float) percent);
//   }
//   return outgoing;
// }


/** Returns a duplicate copy of this object. */
// public IntDict copy() {
//   IntDict outgoing = new IntDict(count);
//   System.arraycopy(keys, 0, outgoing.keys, 0, count);
//   System.arraycopy(values, 0, outgoing.values, 0, count);
//   for (int i = 0; i < count; i++) {
//     outgoing.indices.put(keys[i], i);
//   }
//   outgoing.count = count;
//   return outgoing;
// }


/**
 * Write tab-delimited entries out to
 * @param writer
 */
// public void write(PrintWriter writer) {
//   for (int i = 0; i < count; i++) {
//     writer.println(keys[i] + "\t" + values[i]);
//   }
//   writer.flush();
// }


// public void print() {
//   for (int i = 0; i < size(); i++) {
//     System.out.println(keys[i] + " = " + values[i]);
//   }
// }


// @Override
// public String toString() {
//   StringBuilder sb = new StringBuilder();
//   sb.append(getClass().getSimpleName() + " size=" + size() + " { ");
//   for (int i = 0; i < size(); i++) {
//     if (i != 0) {
//       sb.append(", ");
//     }
//     sb.append("\"" + keys[i] + "\": " + values[i]);
//   }
//   sb.append(" }");
//   return sb.toString();
// }

