"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UrlComponent = /** @class */ (function () {
    function UrlComponent() {
        UrlComponent.urlArray = "Inside Contructor";
    }
    Object.defineProperty(UrlComponent.prototype, "staticUrlArray", {
        get: function () {
            return UrlComponent.urlArray;
        },
        set: function (url) {
            UrlComponent.urlArray = url;
        },
        enumerable: true,
        configurable: true
    });
    return UrlComponent;
}());
exports.UrlComponent = UrlComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYWJhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdsb2FiYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUdJO1FBQ0UsWUFBWSxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQUM5QyxDQUFDO0lBRUQsc0JBQUksd0NBQWM7YUFBbEI7WUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUMvQixDQUFDO2FBRUQsVUFBbUIsR0FBRztZQUNsQixZQUFZLENBQUMsUUFBUSxHQUFFLEdBQUcsQ0FBQztRQUMvQixDQUFDOzs7T0FKQTtJQU1ILG1CQUFDO0FBQUQsQ0FBQyxBQWZILElBZUc7QUFmVSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVcmxDb21wb25lbnQge1xuXG4gICAgc3RhdGljIHVybEFycmF5O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgVXJsQ29tcG9uZW50LnVybEFycmF5ID0gXCJJbnNpZGUgQ29udHJ1Y3RvclwiO1xuICAgIH1cbiAgXG4gICAgZ2V0IHN0YXRpY1VybEFycmF5KCkge1xuICAgICAgcmV0dXJuIFVybENvbXBvbmVudC51cmxBcnJheTtcbiAgICB9XG5cbiAgICBzZXQgc3RhdGljVXJsQXJyYXkodXJsKXtcbiAgICAgICAgVXJsQ29tcG9uZW50LnVybEFycmF5ID11cmw7XG4gICAgfVxuICBcbiAgfSJdfQ==