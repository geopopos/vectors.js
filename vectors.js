class Vector2d {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	add(vector){
		this.x += vector.x;
		this.y += vector.y;
	}

	sub(vector){
		this.x -= vector.x;
		this.y -= vector.y;
	}

	mult(multiplier){
		if(typeof multiplier === "number"){
			this.x *= multiplier;
			this.y *= multiplier;
		}
		if(typeof multiplier === "object"){
			this.x *= multiplier.x;
			this.y *= multiplier.y;
		}
	}

	div(divisor) {
		if(typeof divisor === "number"){
			this.x /= divisor;
			this.y /= divisor;
		}
		if(typeof divisor === "object"){
			this.x /= divisor.x;
			this.y /= divisor.y;
		}
	}

	mag() {
		return (Math.sqrt((this.x*this.x) + (this.y*this.y)));
	}

	normalize() {
		var mag = this.mag();
		this.div(mag);
	}

	limit(max){
		var mag = this.mag();
		if (mag > max){
			this.x = max * (this.x/mag);
			this.y = max * (this.y/mag);
		}
		
	}

	dist(vector){
		var xDist = this.x - vector.x;
		var yDist = this.y - vector.y;
		return (Math.sqrt((xDist*xDist) + (yDist*yDist)));
	}

	dot(vector){
		return (this.x * vector.x) + (this.y * vector.y);
	}

	static angleBetween(vector1, vector2, angleMode) {
		var angle = Math.acos(vector1.dot(vector2)/(vector1.mag() * vector2.mag()));
		if(angleMode == "degrees"){
			return angle  * 57.2958;
		}else if(angleMode == "radians"){
			return angle;
		}else {
			throw "AngleModeError: AngleMode must be set to either 'degrees' or 'radians'";
		}
	}

	static random(minBound, maxBound){
		var num = 0;
		if(minBound < 0){
			var minRatio = minBound/(maxBound-minBound);
			console.log("Min Ratio: " + minRatio);
			console.log("Range: " + (maxBound-minBound));
			num = (Math.random() + minRatio) * (maxBound - minBound);
			console.log(num);
		}else {
			num = (Math.random() * maxBound) + minBound;
		}

		return num;
	}
}
