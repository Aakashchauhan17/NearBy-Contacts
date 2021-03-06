/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TagContentType } from './tags';
export class XmlTagDefinition {
    constructor() {
        this.closedByParent = false;
        this.contentType = TagContentType.PARSABLE_DATA;
        this.isVoid = false;
        this.ignoreFirstLf = false;
        this.canSelfClose = true;
    }
    requireExtraParent(currentParent) { return false; }
    isClosedByChild(name) { return false; }
}
const _TAG_DEFINITION = new XmlTagDefinition();
export function getXmlTagDefinition(tagName) {
    return _TAG_DEFINITION;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1sX3RhZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvbWxfcGFyc2VyL3htbF90YWdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxjQUFjLEVBQWdCLE1BQU0sUUFBUSxDQUFDO0FBRXJELE1BQU07SUFBTjtRQUNFLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBSWhDLGdCQUFXLEdBQW1CLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDM0QsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixpQkFBWSxHQUFZLElBQUksQ0FBQztJQUsvQixDQUFDO0lBSEMsa0JBQWtCLENBQUMsYUFBcUIsSUFBYSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVwRSxlQUFlLENBQUMsSUFBWSxJQUFhLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQ3pEO0FBRUQsTUFBTSxlQUFlLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0FBRS9DLE1BQU0sOEJBQThCLE9BQWU7SUFDakQsTUFBTSxDQUFDLGVBQWUsQ0FBQztBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1RhZ0NvbnRlbnRUeXBlLCBUYWdEZWZpbml0aW9ufSBmcm9tICcuL3RhZ3MnO1xuXG5leHBvcnQgY2xhc3MgWG1sVGFnRGVmaW5pdGlvbiBpbXBsZW1lbnRzIFRhZ0RlZmluaXRpb24ge1xuICBjbG9zZWRCeVBhcmVudDogYm9vbGVhbiA9IGZhbHNlO1xuICByZXF1aXJlZFBhcmVudHM6IHtba2V5OiBzdHJpbmddOiBib29sZWFufTtcbiAgcGFyZW50VG9BZGQ6IHN0cmluZztcbiAgaW1wbGljaXROYW1lc3BhY2VQcmVmaXg6IHN0cmluZztcbiAgY29udGVudFR5cGU6IFRhZ0NvbnRlbnRUeXBlID0gVGFnQ29udGVudFR5cGUuUEFSU0FCTEVfREFUQTtcbiAgaXNWb2lkOiBib29sZWFuID0gZmFsc2U7XG4gIGlnbm9yZUZpcnN0TGY6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY2FuU2VsZkNsb3NlOiBib29sZWFuID0gdHJ1ZTtcblxuICByZXF1aXJlRXh0cmFQYXJlbnQoY3VycmVudFBhcmVudDogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlzQ2xvc2VkQnlDaGlsZChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XG59XG5cbmNvbnN0IF9UQUdfREVGSU5JVElPTiA9IG5ldyBYbWxUYWdEZWZpbml0aW9uKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRYbWxUYWdEZWZpbml0aW9uKHRhZ05hbWU6IHN0cmluZyk6IFhtbFRhZ0RlZmluaXRpb24ge1xuICByZXR1cm4gX1RBR19ERUZJTklUSU9OO1xufVxuIl19