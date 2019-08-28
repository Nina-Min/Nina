//左边时钟表盘部分
function left() {
	const secondHand = document.querySelector(".sec-hand");
	const minHand = document.querySelector(".min-hand");
	const hourHand = document.querySelector(".hour-hand");
	function updata() {
		const now = new Date();
		//秒针的旋转计算
		const seconds = now.getSeconds();
		const secondsDegrees = seconds * 360 / 60;
		// const secondsDegrees = seconds * 6;    //每秒钟秒针旋转360/60=6度
		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
		//分针旋转计算
		const mins = now.getMinutes();
		const minsDegrees = mins * 360 /60;
		// const minsDegrees = (mins * 6) + (seconds/60) * 6;
		minHand.style.transform = `rotate(${minsDegrees}deg)`;
		//时针旋转计算
		const hours = now.getHours();
		const hoursDegrees = hours * 360 / 12;
		// const hoursDegrees = (hours - 12) * 30 + (mins/60) * 30;
		hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	}
	setInterval(updata, 1000);
	updata();
}
//右边电子日历部分
function right() {
	const DATE = document.querySelector(".date");
	const WEEK = document.querySelector(".week");
	const TIME = document.querySelector(".time");
	function Adate() {
		const now = new Date();
		const weekList = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
		const month = now.getMonth() + 1;
		const str = now.getFullYear() + "-" + month + "-" + now.getDate();
		DATE.innerHTML = str;
		WEEK.innerHTML = weekList[now.getDay()];
	}
	Adate();
	setInterval(Adate, 24 * 3600);
	
	//分钟/秒,不足两位时,用0进行凑位
	function zero(arg) {
		if(arg >= 10){
			return arg;
		}else{
			return "0" + arg;
		}
	}
	
	//显示当前时间
	function Atime(){
		const now = new Date();
		const str = now.getHours() + ":" + zero(now.getMinutes()) + ":" + zero(now.getSeconds());
		TIME.innerHTML = str;
	}
	Atime();
	setInterval(Atime, 1000);
}
left();
right();



