var Collision = /** @class */ (function () {
    function Collision() {
    }
    Collision.prototype.isCollidingBrick = function (ball, brick) {
        if (ball.pos.x < brick.pos.x + brick.width &&
            ball.pos.x + ball.width > brick.pos.x &&
            ball.pos.y < brick.pos.y + brick.height &&
            ball.pos.y + ball.height > brick.pos.y) {
            return true;
        }
        return false;
    };
    // Check ball collision with bricks
    Collision.prototype.isCollidingBricks = function (ball, bricks) {
        var _this = this;
        var colliding = false;
        bricks.forEach(function (brick, i) {
            if (_this.isCollidingBrick(ball, brick)) {
                ball.changeYDirection();
                if (brick.energy === 1) {
                    bricks.splice(i, 1);
                }
                else {
                    brick.energy -= 1;
                }
                colliding = true;
            }
        });
        return colliding;
    };
    Collision.prototype.checkBallCollision = function (ball, paddle, view) {
        // 1. Check ball collision with paddle
        if (ball.pos.x + ball.width > paddle.pos.x &&
            ball.pos.x < paddle.pos.x + paddle.width &&
            ball.pos.y + ball.height === paddle.pos.y) {
            ball.changeYDirection();
        }
        // 2. Check ball collision with walls
        // Ball movement X constraints
        if (ball.pos.x > view.canvas.width - ball.width || ball.pos.x < 0) {
            ball.changeXDirection();
        }
        // Ball movement Y constraints
        if (ball.pos.y < 0) {
            ball.changeYDirection();
        }
    };
    return Collision;
}());
export { Collision };
//# sourceMappingURL=Collison.js.map