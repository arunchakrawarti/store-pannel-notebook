const Input = ({
  label,
  className = "",
  iconClass,
  iconEye,
  error,
  options = [],
  valueKey,
  labelKey,
  labelRender,
  ...rest
}) => {
  return (
    <div className="text-text-primary flex w-full flex-col gap-1">
      {label && (
        <label className="font-poppins font-medium text-[#5B5B5B] text-[12px] tracking-[0%]">{label}</label>
      )}

      {rest?.type === "textarea" ? (
        <textarea
          {...rest}
          className={`font-poppins font-normal text-gray-900 text-[12px]  tracking-[0%] h-[90px]  p-3 ${error
              ? "border border-red-400 ring-2 ring-red-300 focus:ring-red-500"
              : "border border-gray-300 focus:ring-2 focus:ring-gray-200"
            } ${className}`}
        />
      ) : rest?.type === "select" ? (
        <select
          {...rest}
          className={`text-dark h-[45px] w-full text-[#5B5B5B] rounded-sm px-3 text-sm transition-all duration-300 ease-in-out outline-none disabled:opacity-50 disabled:cursor-not-allowed ${error
              ? "border border-red-400  ring-2 ring-red-300 focus:ring-red-500"
              : "border border-gray-200 focus:ring-2 focus:ring-gray-200"
            } ${className}`}
        >
          <option value="">
            {` Select ${label || "Option"}`}
          </option>

          {options.map((opt, idx) => (
            <option key={idx} value={opt[valueKey] || opt.value || opt}>
              {labelRender
                ? labelRender(opt)
                : opt[labelKey] || opt.label || opt}
            </option>
          ))}
        </select>
      ) : (
        <div className="relative">
          {iconClass && (
            <i
              className={`ri-${iconClass} absolute top-1/2 left-3 -translate-y-1/2 text-lg font-light text-gray-500`}
            />
          )}
          {iconEye && (
            <i
              className={`ri-${iconEye} absolute top-1/2 right-3 -translate-y-1/2 text-lg font-light text-gray-500`}
            />
          )}
          <input
            {...rest}
            className={`text-dark h-[45px] w-full text-black rounded-sm p-3 text-sm transition-all duration-300 ease-in-out outline-none disabled:opacity-50 font-poppins disabled:cursor-not-allowed ${error
                ? "border border-red-400 ring-2 ring-red-300 focus:ring-red-500"
                : "border border-gray-200 focus:ring-2 focus:ring-gray-200"
              } ${iconClass ? "pl-10" : ""} ${iconEye ? "pr-10" : ""
              } ${className}`}
          />
        </div>
      )}

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Input;