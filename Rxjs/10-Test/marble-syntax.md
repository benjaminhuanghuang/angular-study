# Marble Syntax

—--: This represents an observable that never emits.

-x--y--z|: This represents an observable that emits x on the first frame, y on the fourth, and z on the seventh. After 
emitting z, the observable completes.

--xy--#: This represents an observable that emits x on frame two, y on frame three, and an error on frame six.

-x^(yz)--|: This is a hot observable that emits x before the subscription.
