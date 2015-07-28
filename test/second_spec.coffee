assert = require "assert"
math = require "../src/math"

describe "My math stuff works", ->
  describe "when I try to", ->
    it "add two numbers together", ->
      assert.equal math.add(1,1) , 2
    it "add two negative numbers together", ->
      assert.equal math.add(-1,-2) , -3
