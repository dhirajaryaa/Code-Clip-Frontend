import { useState } from 'react'
import { Button } from '../ui/button'
import { ListFilterPlus, Plus } from 'lucide-react'

function FilterTags() {
    const filter = [
        {
            label: "All",
            value: "all",
        },
        {
            label: "React",
            value: "react",
        },
        {
            label: "Next",
            value: "next",
        }

    ];
    const [activeFilter, setActiveFilter] = useState("all");

    return (
        <div className="flex items-center justify-between bg-sidebar p-2 rounded-md shadow-md mt-3">
            <div className="flex items-center gap-3 overflow-x-auto w-full">
                <Button type="button" variant="outline" size="sm">
                    <ListFilterPlus />
                </Button>
                <div className="flex items-center justify-start gap-2 flex-nowrap">
                    {filter.map((item) => (
                        <Button
                            size="sm"
                            variant={activeFilter === item.value ? "default" : "link"}
                            key={item.value}
                            onClick={() => setActiveFilter(item.value)}
                            className={
                                activeFilter === item.value
                                    ? "bg-primary text-primary-foreground duration-150"
                                    : "text-gray-500"
                            }
                        >
                            {item.label}
                        </Button>
                    ))}
                </div>
            </div>
            <Button type="button" variant="outline" size="sm">
                <Plus />
                Add Tags
            </Button>
        </div>
    )
}

export default FilterTags