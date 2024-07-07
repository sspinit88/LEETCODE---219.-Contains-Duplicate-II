/*
219. Contains Duplicate II

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false



Ваша задача - вернуть true, если в массиве есть два различных индекса i и j, 
таких что nums[i] == nums[j] и abs(i - j) <= k.

Вот шаги, которые мы будем следовать:

1. Создайте словарь для отслеживания последнего индекса каждого числа.
2. Пройдите по каждому числу в массиве nums.
3. Если число уже присутствует в словаре и разница между текущим индексом и последним индексом этого числа меньше или равна k, верните true.
4. В противном случае обновите последний индекс этого числа.
5. Если вы прошли все числа в nums и не вернули true, верните false.

Your task is to return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Here are the steps we will follow:

1. Create a dictionary to track the last index of each number.
2. Go through each number in the nums array.
3. If the number is already present in the dictionary and the difference between the current index and the last index of this number is less than or equal to k, 
   return true.
4. Otherwise, update the last index of this number.
5. If you have gone through all numbers in nums and have not returned true, return false.

*/

function containsNearbyDuplicate(nums, k) {
  // Создаем словарь для отслеживания последнего индекса каждого числа
  // Create a dictionary to track the last index of each number
  let map = {};

  // Проходим по каждому числу в массиве nums
  // Go through each number in the nums array
  for (let i = 0; i < nums.length; i++) {
    // Если число уже присутствует в словаре и разница между текущим индексом и последним индексом этого числа меньше или равна k
    // If the number is already present in the dictionary and the difference between the current index and the last index of this number is less than or equal to k
    if (map[nums[i]] !== undefined && i - map[nums[i]] <= k) {
      return true;
    }

    // Обновляем последний индекс этого числа
    // Update the last index of this number
    map[nums[i]] = i;
  }

  // Если мы прошли все числа в nums и не вернули true, возвращаем false
  // If we have gone through all numbers in nums and have not returned true, return false
  return false;
}
