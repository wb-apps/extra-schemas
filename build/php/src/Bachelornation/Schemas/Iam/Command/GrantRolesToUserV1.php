<?php
// @link https://schemas.extra.com/json-schema/extra/iam/command/grant-roles-to-user/1-0-0.json#
namespace Extra\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\GrantRolesToUser\GrantRolesToUserV1 as GdbotsIamGrantRolesToUserV1;
use Gdbots\Schemas\Iam\Mixin\GrantRolesToUser\GrantRolesToUserV1Mixin as GdbotsIamGrantRolesToUserV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class GrantRolesToUserV1 extends AbstractMessage implements
    GrantRolesToUser,
    GdbotsPbjxCommandV1,
    GdbotsIamGrantRolesToUserV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:extra:iam:command:grant-roles-to-user:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsIamGrantRolesToUserV1Mixin::create(),
            ]
        );
    }
}
