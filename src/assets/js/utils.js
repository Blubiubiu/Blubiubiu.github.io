/**
 * @desc 公共方法
 * @author lsy
 * @todo xxx
 */


 /**
  * 递归(N维 ---> 一维)
  * @param {array} [arr] - 查询数组 
  * @param {array} [result] - 返回数组
  */
export function recursion(arr, result) {
	arr.map((item) => {
		if (item.children && item.children.length) {
			recursion(item.children, result);
		} else {
			result.push(item);
		}
	});
	return result;
}