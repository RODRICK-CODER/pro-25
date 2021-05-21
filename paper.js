class paper{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		restitution:0.3,
		friction:0,
		density:1.2
	}
		this.image=loadImage("paper.png")
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
	}
display()
{
	var paperpos=this.body.position;
	var angle=this.body.angle;		
	push()
	translate(paperpos.x, paperpos.y);
	rectMode(CENTER)
	rotate(angle);
	//draw the ellipse here to display the rubber ball
	image(this.image,0,0,this.r,this.r);

	pop()
}
}