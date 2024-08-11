import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class AddTagsInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    transactionId!: string;

    @ApiProperty({
        required: true,
        type: () => [String]
    })
    @Type(() => String)
    tags!: string;
}

export { AddTagsInput as AddTagsInput };