# angular-todolist
  **angularJS 튜토리얼 프로젝트**
  - google 로컬스토리지 사용


## Module
* angularjs의 기본적인 기능 단위
``` html
	<script type="text/javascript">
		const module = angular.module('module-name', []);
	</script>
	<div ng-app="my-app">
		<div ng-init="key: value">
			<!-- angular js template syntax -->
			{{key}}
		</div>
	</div>
```

## Controller
* module에 정의하여 사용 가능하다.
* 관습적으로 컨트롤러의 이름의 첫글자는 대문자로 사용한다.
* controller는 각각의 $scope 변수를 가지며,  service, directive, filter 등을 주입받아 사용한다.
``` javascript
	angularModule
		.controller(
			'TodoCtrl',
			[$scope, service, filter, 
				function($scope, service, filter) {
					$scope.title = 'hello, angular js';
					
					$scoper.alert = () => {
						alert($scope.title);
					}
				}
			],
		)
```

``` html
	<div ng-app="module-name">
		<div ng-controller="TodoCtrl">
			<h1>{{title}}</h1>
			<button ng-click="alert()">alert</button>
		</div>
	</div>
```


## Directive : 지시자
`ng-show="boolVal"` : 조건이 참인경우에만 해당 block-model을 보여줌
`ng-repeat="item in list"` : scope 내 변수를 반복 렌더링 할때 사용
	`ng-repeat="item in list" : 사용시`
### template 정의
``` javascript
	angularModule.directive("myTemplate", function(){
		retrun{
			"template": "<div>템플릿을 정의한다.</div>";
			// or "templateUrl": "./template.html";
		}
	});
```
``` html
	<my-template></my-template>
```

## form
### formData Binding
`ng-model="scopeVal"` : $scope에 정의된 변수와 property를 양방향 바인딩


## event binding
`ng-click="myFunc()"` : scope에 정의된 변수를 호출. 콜백에 아니라 표현식으로 사용
`ng-blur="myFunc()"`

## Filter
### angular 정의 filter
``` html
<!--  -->
	<div>{{registedDate | date: 'yyyy-MM-dd hh:mm:ss'}}</div>
<!-- repeat filter : item에 filter와 같은 이름의 key의 falsly를 확인하여 필터링 -->
	<div ng-repeat="item in list | completed"></div>
	<!-- list = [{title: 'a', completed: true}, {title: 'b', completed: false}]-->
	<!-- complted = {completed: true} -->
	<!-- completed가 true인 객체만 필터링한다. 

```

### custom filter
```
	angular.filter
```

## Services
service, factory, provider <- 다음의 3가지 방법으로 제공 가능하다.

### Factory
``` javascript
	angularModule.factory("servieName[storage]", function(){
		var storage1 = {
			varData: [],
			funcData: function(data){
				//logic
			}
			funcData: function(dat){
				//logic
				return ...
			}
		}
	})
```
