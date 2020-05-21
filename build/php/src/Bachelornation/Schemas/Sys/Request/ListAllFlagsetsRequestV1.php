<?php
// @link https://schemas.extra.com/json-schema/extra/sys/request/list-all-flagsets-request/1-0-0.json#
namespace Extra\Schemas\Sys\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;
use Triniti\Schemas\Sys\Mixin\ListAllFlagsetsRequest\ListAllFlagsetsRequestV1 as TrinitiSysListAllFlagsetsRequestV1;
use Triniti\Schemas\Sys\Mixin\ListAllFlagsetsRequest\ListAllFlagsetsRequestV1Mixin as TrinitiSysListAllFlagsetsRequestV1Mixin;

final class ListAllFlagsetsRequestV1 extends AbstractMessage implements
    ListAllFlagsetsRequest,
    GdbotsPbjxRequestV1,
    TrinitiSysListAllFlagsetsRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:extra:sys:request:list-all-flagsets-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                TrinitiSysListAllFlagsetsRequestV1Mixin::create(),
            ]
        );
    }
}
