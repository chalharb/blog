import { Badge } from "@/lib/components/badge";
import { Separator } from "@/lib/components/separator";
import { CalendarDaysIcon } from "lucide-react";

export interface TimelineEntry {
  jobTitle: string;
  jobSubTitle?: string;
  company: {
    name: string;
    url: string;
  };
  techStack?: string[];
  datesActive: {
    isCurrent?: boolean;
    startDate: Date;
    endDate: Date;
  };
  description: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
}

export const Timeline: React.FC<TimelineProps> = ({ entries }) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 p-2 ml-3">
      {entries.map((entry, index) => (
        <TimelineEntry key={index} {...entry} />
      ))}
    </ol>
  );
};

export const TimelineEntry: React.FC<TimelineEntry> = ({
  jobTitle,
  jobSubTitle,
  company,
  techStack,
  datesActive,
  description,
}) => {
  const shortStartDate = datesActive.startDate.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });

  const shortEndDate = datesActive.isCurrent
    ? "Present"
    : datesActive.endDate.toLocaleString("en-US", {
        month: "short",
        year: "numeric",
      });

  return (
    <li className="mb-12 ms-6 last:mb-0">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 dark:bg-primary dark:text-background rounded-full -start-4 ring-8 ring-background">
        <CalendarDaysIcon width={20} height={20} />
      </span>
      <h3 className="scroll-m-20 text-lg md:text-xl font-semibold tracking-tight">
        {jobTitle}
        {jobSubTitle && (
          <span className="block md:inline md:ml-2 text-base text-muted-foreground">
            {jobSubTitle}
          </span>
        )}
      </h3>
      <div className="flex space-x-3 h-[20px] text-sm text-muted-foreground">
        <div>
          @{" "}
          <a
            className="hover:underline"
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company.name}
          </a>
        </div>
        <Separator orientation="vertical" />
        <div>
          {shortStartDate} - {shortEndDate}
        </div>
      </div>
      <p className="leading-7 mt-4">{description}</p>
      <div className="flex flex-wrap mt-3">
        {techStack &&
          techStack.length > 0 &&
          techStack.map((tech, index) => (
            <Badge className="mt-1 [&:not(:last-child)]:mr-1" key={index}>
              {tech}
            </Badge>
          ))}
      </div>
    </li>
  );
};
