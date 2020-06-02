<?php
// @link https://schemas.extratv.com/json-schema/extra/dam/event/gallery-asset-reordered/1-0-0.json#
namespace Extra\Schemas\Dam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;
use Triniti\Schemas\Dam\Mixin\GalleryAssetReordered\GalleryAssetReorderedV1 as TrinitiDamGalleryAssetReorderedV1;
use Triniti\Schemas\Dam\Mixin\GalleryAssetReordered\GalleryAssetReorderedV1Mixin as TrinitiDamGalleryAssetReorderedV1Mixin;

final class GalleryAssetReorderedV1 extends AbstractMessage implements
    GalleryAssetReordered,
    GdbotsPbjxEventV1,
    TrinitiDamGalleryAssetReorderedV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:extra:dam:event:gallery-asset-reordered:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxEventV1Mixin::create(),
                TrinitiDamGalleryAssetReorderedV1Mixin::create(),
            ]
        );
    }
}
