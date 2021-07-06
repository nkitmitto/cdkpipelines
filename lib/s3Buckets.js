"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testBucket2 = exports.testBucket = void 0;
const core_1 = require("@aws-cdk/core");
const aws_s3_1 = require("@aws-cdk/aws-s3");
class testBucket extends core_1.Construct {
    constructor(scope, id) {
        super(scope, id);
        new aws_s3_1.Bucket(this, 'newbucket1', {
            bucketName: 'nk-ginger-test111'
        });
    }
}
exports.testBucket = testBucket;
class testBucket2 extends core_1.Construct {
    constructor(scope, id) {
        super(scope, id);
        new aws_s3_1.Bucket(this, 'newbucket2', {
            bucketName: 'nk-ginger-test222'
        });
    }
}
exports.testBucket2 = testBucket2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiczNCdWNrZXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiczNCdWNrZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUEwQztBQUMxQyw0Q0FBeUM7QUFFekMsTUFBYSxVQUFXLFNBQVEsZ0JBQVM7SUFDckMsWUFDSSxLQUFnQixFQUNoQixFQUFVO1FBRVYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUVwQixJQUFJLGVBQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQzNCLFVBQVUsRUFBRSxtQkFBbUI7U0FDbEMsQ0FBQyxDQUFBO0lBQ0YsQ0FBQztDQUNKO0FBWEQsZ0NBV0M7QUFFRCxNQUFhLFdBQVksU0FBUSxnQkFBUztJQUN0QyxZQUNJLEtBQWdCLEVBQ2hCLEVBQVU7UUFFVixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRXBCLElBQUksZUFBTSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDM0IsVUFBVSxFQUFFLG1CQUFtQjtTQUNsQyxDQUFDLENBQUE7SUFDRixDQUFDO0NBQ0o7QUFYRCxrQ0FXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0IHsgQnVja2V0IH0gZnJvbSAnQGF3cy1jZGsvYXdzLXMzJztcblxuZXhwb3J0IGNsYXNzIHRlc3RCdWNrZXQgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBzY29wZTogQ29uc3RydWN0LFxuICAgICAgICBpZDogc3RyaW5nXG4gICAgICApIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKVxuXG4gICAgbmV3IEJ1Y2tldCh0aGlzLCAnbmV3YnVja2V0MScsIHtcbiAgICAgICAgYnVja2V0TmFtZTogJ25rLWdpbmdlci10ZXN0MTExJ1xuICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgdGVzdEJ1Y2tldDIgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBzY29wZTogQ29uc3RydWN0LFxuICAgICAgICBpZDogc3RyaW5nXG4gICAgICApIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKVxuXG4gICAgbmV3IEJ1Y2tldCh0aGlzLCAnbmV3YnVja2V0MicsIHtcbiAgICAgICAgYnVja2V0TmFtZTogJ25rLWdpbmdlci10ZXN0MjIyJ1xuICAgIH0pXG4gICAgfVxufSJdfQ==