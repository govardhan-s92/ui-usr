import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

transform(items:any[], args:any):any[] {
		var isSearch = (data:any): boolean => {
			var isAll = false;
			if(typeof data === 'object' ){
				for (var z in data) {
					if(isAll = isSearch(data[z]) ){
						break;
					}
				}
			} else {
				if(typeof args === 'number'){
					isAll = data === args;
				} else {
					isAll = data.toString().match( new RegExp(args, 'i') );
				}
			} 

			return isAll;
		};

		return items.filter(isSearch);
	}
}
