<?php
// @link https://schemas.extratv.com/json-schema/extra/sys/request/get-redirect-request/1-0-0.json#
namespace Extra\Schemas\Sys\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Ncr\Mixin\GetNodeRequest\GetNodeRequestV1 as GdbotsNcrGetNodeRequestV1;
use Gdbots\Schemas\Ncr\Mixin\GetNodeRequest\GetNodeRequestV1Mixin as GdbotsNcrGetNodeRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;

final class GetRedirectRequestV1 extends AbstractMessage implements
    GetRedirectRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrGetNodeRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:extra:sys:request:get-redirect-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrGetNodeRequestV1Mixin::create(),
            ]
        );
    }
}
