> As of Angular version 13, `entryComponents` are no longer necessary.
  Migration completed.

> In Angular version 14, the `pathMatch` property of `Routes` was updated to be a strict union of the two valid options: `'full'|'prefix'`.
  `Routes` and `Route` variables need an explicit type so TypeScript does not infer the property as the looser `string`.
  Migration completed.

> As of Angular version 14, Forms model classes accept a type parameter, and existing usages must be opted out to preserve backwards-compatibility.
  Migration completed.
